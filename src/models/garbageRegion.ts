import mongoose from "mongoose";

const garbageRegionSchema = new mongoose.Schema({
  regionName: String,
  postalCode: String,
  hours: String,
  city: { type: mongoose.Schema.Types.ObjectId, ref: "garbagecities" },
});

export const GarbageRegion = mongoose.model(
  "garbageregions",
  garbageRegionSchema
);
