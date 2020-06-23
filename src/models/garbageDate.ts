import mongoose from "mongoose";

const garbageDateSchema = new mongoose.Schema({
  garbageType: { type: mongoose.Schema.Types.ObjectId, ref: "garbagetypes" },
  garbageRegion: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "garbageregions",
  },
  date: Date,
});

export const GarbageDate = mongoose.model("garbageregions", garbageDateSchema);
