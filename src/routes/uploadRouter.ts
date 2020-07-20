import express, { Response, Request } from "express";
import { fullSchema } from "../validators/uploadFullValidator";
import { UploadObject } from "../types/FullUpload";

import { GarbageRegion } from "../models/garbageRegion";
import { GarbageCities } from "../models/garbageCity";
import { GarbageType } from "../models/garbageType";
import { GarbageDate } from "../models/garbageDate";
import moment from "moment";

import * as errMsg from "../errorMessaging";
const { respondWithError } = errMsg;

const Router = express.Router();

Router.put("/full", async (req: Request, res: Response) => {
  try {
    const { error } = fullSchema.validate(req.body);
    if (error) {
      return respondWithError(
        res,
        errMsg.UPLOAD_ERROR_JSON_STRUCTURE,
        error.details[0].message
      );
    }
    const data: UploadObject = req.body;
    // * Region exists?
    let responseRegion = await GarbageRegion.findOne({
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
        let response = await GarbageType.findOne({ type: el });
        if (!response) {
          response = await GarbageType.create({ type: el });
        }
        typesIds[el] = response._id;
      })
    );

    const uploadDatesArray = data.dates.map((el) => {
      return {
        garbageType: typesIds[el.type],
        garbageRegion: responseRegion!._id,
        date: moment(el.date).toISOString(true),
      };
    });

    await GarbageDate.insertMany(uploadDatesArray);
    res.status(201).json({ success: true, regionId: responseRegion._id });
  } catch (error) {
    respondWithError(res, errMsg.UPLOAD_ERROR_DEFAULT);
  }
});

export default Router;
