import mongoose from "mongoose";

const garbageExampleSchema = new mongoose.Schema({
  name: String,
  garbageType: { type: mongoose.Schema.Types.ObjectId, ref: "garbagetypes" },
});

export const GarbageExample = mongoose.model(
  "garbageexamples",
  garbageExampleSchema
);
