import mongoose from "mongoose";

const garbageCitySchema = new mongoose.Schema({
  cityName: String,
  province: String,
});

export const GarbageCities = mongoose.model("garbagecities", garbageCitySchema);
