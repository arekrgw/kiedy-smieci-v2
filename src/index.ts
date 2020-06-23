import dotenv from "dotenv";
import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import MainRouter from "./routes/router";
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
  .then(() => {
    console.log("Database connected");
  });

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
