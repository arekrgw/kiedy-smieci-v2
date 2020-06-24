import express, { Request, Response } from "express";
import { GarbageRegion } from "../models/garbageRegion";
import { GarbageDate } from "../models/garbageDate";
import { GarbageExample } from "../models/garbageExample";
import { GarbageType } from "../models/garbageType";

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

Router.get("/dates/:id", async (req: Request, res: Response) => {
  try {
    const dates = await GarbageDate.find(
      {
        garbageRegion: req.params.id,
      },
      "-__v"
    )
      .populate("garbageType")
      .populate("garbageRegion", "-postalCode");
    res.json(dates).status(200);
  } catch (err) {
    console.log(err);
    res.status(400).json({ error: "Error occured", description: err });
  }
});

Router.get("/examples/:id", async (req: Request, res: Response) => {
  try {
    const examples = await GarbageExample.find();
    res.json(examples).status(200);
  } catch (err) {
    console.log(err);
    res.status(400).json({ error: "Error occured", description: err });
  }
});

Router.get("/types", async (req: Request, res: Response) => {
  try {
    const types = await GarbageType.find();
    res.json(types).status(200);
  } catch (err) {
    console.log(err);
    res.status(400).json({ error: "Error occured", description: err });
  }
});

export default Router;
