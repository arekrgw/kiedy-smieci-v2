import express, { Request, Response } from "express";
import { GarbageRegion } from "../models/garbageRegion";

const Router = express.Router();

Router.get("/regions", async (req: Request, res: Response) => {
  try {
    const regions = await GarbageRegion.find().populate("city");
    res.json(regions).status(200);
  } catch (err) {
    console.log(err);
    res.json({ error: "Error occured" }).status(400);
  }
});

Router.get("/regions/:id", async (req: Request, res: Response) => {
  try {
    const region = await GarbageRegion.findOne({ _id: req.params.id }).populate(
      "city"
    );
    if (!region) {
      return res.json({ message: "Not found" }).status(404);
    }
    res.json(region).status(200);
  } catch (err) {
    console.log(err);
    res.json({ error: "Error occured", description: err }).status(400);
  }
});

export default Router;
