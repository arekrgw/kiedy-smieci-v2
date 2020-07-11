import express, { Response, Request } from "express";
import { fullSchema } from "../validators/uploadFullValidator";

const Router = express.Router();

Router.put("/full", (req: Request, res: Response) => {
  const { error } = fullSchema.validate(req.body);
  if (error) {
    return res.json({ error: error.details[0].message }).status(400);
  }
  //validobj

  res.status(200).json(req.body);
});

export default Router;
