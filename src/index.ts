import dotenv from "dotenv";
import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import { GarbageType } from "./models/garbageType";
dotenv.config();

mongoose.connect(process.env.MONGOCREDENTIALS!, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

mongoose.connection.once("open", async () => {
  console.log("Connected to MongoDB");
  const types = await GarbageType.find({});

  console.log(types);
});

const port = process.env.PORT || 3000;
const app = express();

app.use(bodyParser.json());

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
