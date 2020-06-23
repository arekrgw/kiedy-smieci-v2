import dotenv from "dotenv";
import express from "express";
import bodyParser from "body-parser";
dotenv.config();

const port = process.env.PORT || 3000;
const app = express();

app.use(bodyParser.json());

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
