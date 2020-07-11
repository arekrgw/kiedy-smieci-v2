import express, { Response, Request } from "express";
import { fullSchema } from "../validators/uploadFullValidator";
import { UploadObject } from "../types/FullUpload";

import { GarbageRegion } from "../models/garbageRegion";
import { GarbageCities } from "../models/garbageCity";
import { Document } from "mongoose";
const Router = express.Router();

Router.put(
  "/full",
  async (req: Request<{}, {}, UploadObject>, res: Response) => {
    const { error } = fullSchema.validate(req.body);
    if (error) {
      return res.json({ error: error.details[0].message }).status(400);
    }
    // * Region exists
    let responseRegion = await GarbageRegion.findOne({
      regionName: req.body.region.regionName,
    });
    if (!responseRegion) {
      if (!req.body.region.postalCode)
        return res.status(500).json({ error: "New region data error" });
      let responseCity = await GarbageCities.findOne({
        cityName: req.body.city.cityName,
      });
      if (!responseCity) {
        if (!req.body.city.province)
          return res.status(500).json({ error: "New city data error" });
        responseCity = await GarbageCities.create({
          cityName: req.body.city.cityName,
          province: req.body.city.province,
        });
      }
      responseRegion = await GarbageRegion.create({
        regionName: req.body.region.regionName,
        postalCode: req.body.region.postalCode,
        hours: req.body.region.hours || "6-15",
        city: responseCity._id,
      });
    }
    console.log("Done");

    // console.log(response);

    res.status(200).json(req.body.city);
  }
);

export default Router;
