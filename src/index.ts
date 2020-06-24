import dotenv from "dotenv";
import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import MainRouter from "./routes/router";
import { GarbageDate } from "./models/garbageDate";
import obj from "./testQueries";
dotenv.config();
const port = process.env.PORT || 3000;
const app = express();

app.use(bodyParser.json());
app.use("/", MainRouter);

mongoose
  .connect(process.env.MONGOCREDENTIALS!, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(async () => {
    console.log("Database connected");
    // const d: any = await GarbageDate.find();
    // const n = new Date(d[0].date);
    // console.log(n.getFullYear(), new Date("2020-07-29"));
  });

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
