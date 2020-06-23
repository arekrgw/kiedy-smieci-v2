import mongoose from "mongoose";

const garbageTypeSchema = new mongoose.Schema({
  type: { type: String, unique: true },
});

export const GarbageType = mongoose.model("garbagetypes", garbageTypeSchema);
