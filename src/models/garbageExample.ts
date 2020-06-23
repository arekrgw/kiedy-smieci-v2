import mongoose from "mongoose";
import { GarbageType } from "./garbageType";

const garbageExampleSchema = new mongoose.Schema({
  name: String,
  garbageType: { type: mongoose.Schema.Types.ObjectId, ref: GarbageType },
});

export const GarbageExample = mongoose.model(
  "garbageexamples",
  garbageExampleSchema
);
