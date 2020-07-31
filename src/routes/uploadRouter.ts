import express, { Response, Request } from "express";
import { fullSchema } from "../validators/uploadFullValidator";
import { UploadObject } from "../types/FullUpload";

import { GarbageRegion } from "../models/garbageRegion";
import { GarbageCities } from "../models/garbageCity";
import { GarbageType } from "../models/garbageType";
import { GarbageDate } from "../models/garbageDate";
import { uploadTokenMiddleware } from "../validators/uploadTokenMiddleware";
import moment from "moment";
import hash from "object-hash";
import { Document } from "mongoose";
import * as errMsg from "../errorMessaging";
const { respondWithError } = errMsg;

const Router = express.Router();

Router.put(
  "/full",
  uploadTokenMiddleware,
  async (req: Request, res: Response) => {
    let responseRegion: Document | null;
    try {
      const {error} = fullSchema.validate(req.body);
      if (error) {
        return respondWithError(
            res,
            errMsg.UPLOAD_ERROR_JSON_STRUCTURE,
            error.details[0].message
        );
      }
      const data: UploadObject = req.body;
      // * Region exists?
      responseRegion = await GarbageRegion.findOne({
        regionName: data.region.regionName,
      });
      if (!responseRegion) {
        if (!data.region.postalCode)
          return respondWithError(res, errMsg.UPLOAD_ERROR_REGION);
        let responseCity = await GarbageCities.findOne({
          cityName: data.city.cityName,
        });
        if (!responseCity) {
          if (!data.city.province)
            return respondWithError(res, errMsg.UPLOAD_ERROR_CITY);
          responseCity = await GarbageCities.create({
            cityName: data.city.cityName,
            province: data.city.province,
          });
        }
        responseRegion = await GarbageRegion.create({
          regionName: data.region.regionName,
          postalCode: data.region.postalCode,
          hours: data.region.hours || "6-15",
          city: responseCity._id,
        });
      }
      let possibleNewTypes = new Set<string>();
      data.dates.map((el) => {
        possibleNewTypes.add(el.type);
      });
      let typesIds: { [key: string]: string } = {};
      await Promise.all(
          Array.from(possibleNewTypes).map(async (el) => {
            let response = await GarbageType.findOne({type: el});
            if (!response) {
              response = await GarbageType.create({type: el});
            }
            typesIds[el] = response._id;
          })
      );

      const uploadDatesArray = data.dates.map((el) => {
        const dateObj = {
          garbageType: `${typesIds[el.type].toString()}`,
          garbageRegion: `${responseRegion!._id}`,
          date: moment(el.date).toISOString(true),
        };

        const dateObjHash = hash.sha1(dateObj);
        return {
          ...dateObj,
          dateObjectHash: dateObjHash,
        };
      });

      await GarbageDate.insertMany(uploadDatesArray, {
        ordered: false,
      });

      res.status(201).json({success: true, regionId: responseRegion._id});
    } catch (error) {
      if (error.code == 11000) {
        return res
          .status(201)
          .json({
            success: true,
            regionId: responseRegion!._id,
            additionalInfo: "Some dates has already been added",
          });
      }
      respondWithError(res, errMsg.UPLOAD_ERROR_DEFAULT);
    }
  }
);

export default Router;
