import { Request, Response, NextFunction } from "express";
import {
  UPLOAD_ERROR_TOKEN_INVALID,
  respondWithError,
} from "../errorMessaging/index";

export const uploadTokenMiddleware = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  if (process.env.USE_UPLOAD_TOKEN == "0") {
    next();
  } else {
    if (req.headers.uploadtoken == process.env.UPLOAD_TOKEN) next();
    else respondWithError(res, UPLOAD_ERROR_TOKEN_INVALID);
  }
};
