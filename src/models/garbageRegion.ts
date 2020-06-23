import mongoose from "mongoose";
import { GarbageCities } from "./garbageCity";

const garbageRegionSchema = new mongoose.Schema({
  regionName: String,
  postalCode: String,
  hours: String,
  city: { type: mongoose.Schema.Types.ObjectId, ref: GarbageCities },
});

export const GarbageRegion = mongoose.model(
  "garbageregions",
  garbageRegionSchema
);
