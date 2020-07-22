import mongoose from "mongoose";
import { GarbageRegion } from "./garbageRegion";
import { GarbageType } from "./garbageType";

const garbageDateSchema = new mongoose.Schema({
  garbageType: { type: mongoose.Schema.Types.ObjectId, ref: GarbageType },
  garbageRegion: {
    type: mongoose.Schema.Types.ObjectId,
    ref: GarbageRegion,
  },
  date: String,
  dateObjectHash: { type: String, unique: true },
});

export const GarbageDate = mongoose.model("garbagedates", garbageDateSchema);
