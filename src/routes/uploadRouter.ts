import express, { Response, Request, response } from "express";
import { fullSchema } from "../validators/uploadFullValidator";
import { UploadObject } from "../types/FullUpload";

import { GarbageRegion } from "../models/garbageRegion";
import { GarbageCities } from "../models/garbageCity";
import { GarbageType } from "../models/garbageType";
import { GarbageDate } from "../models/garbageDate";
import moment from "moment";
const Router = express.Router();

Router.put("/full", async (req: Request, res: Response) => {
  const { error } = fullSchema.validate(req.body);
  if (error) {
    return res.json({ error: error.details[0].message }).status(400);
  }
  // await GarbageDate.deleteMany({ garbageRegion: "5f09c7d082b2344364834d8e" });
  const data: UploadObject = req.body;
  // * Region exists?
  let responseRegion = await GarbageRegion.findOne({
    regionName: data.region.regionName,
  });
  if (!responseRegion) {
    if (!data.region.postalCode)
      return res.status(500).json({ error: "New region data error" });
    let responseCity = await GarbageCities.findOne({
      cityName: data.city.cityName,
    });
    if (!responseCity) {
      if (!data.city.province)
        return res.status(500).json({ error: "New city data error" });
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
    console.log(el.date);

    return {
      garbageType: typesIds[el.type],
      garbageRegion: responseRegion!._id,
      date: moment(el.date).toISOString(true),
    };
  });

  const response = await GarbageDate.insertMany(uploadDatesArray);

  // ! EXCEPTION HANDLING
  console.log("Done");
  // console.log(moment("2020-12-3").format());

  // console.log(uploadDatesArray);
  res.status(200).json({ success: true });
});

export default Router;
