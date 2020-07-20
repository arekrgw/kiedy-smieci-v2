import { ErrorMessage } from "../types/ErrorMessaging";
import { Response } from "express";

export const JSON_ERROR_SYNTAX: ErrorMessage = {
  msg: "There was a syntax error in your JSON request",
  statusCode: 400,
};

export const UPLOAD_ERROR_JSON_STRUCTURE: ErrorMessage = {
  msg: "There is a problem with your request JSON structure",
  statusCode: 400,
};

export const UPLOAD_ERROR_DEFAULT: ErrorMessage = {
  msg: "There was an error parsing your upload JSON data",
  statusCode: 400,
};

export const UPLOAD_ERROR_CITY: ErrorMessage = {
  msg: "City does not exist and there is not enough data for creating new",
  statusCode: 400,
};

export const UPLOAD_ERROR_REGION: ErrorMessage = {
  msg: "Region does not exist and there is not enough data for creating new",
  statusCode: 400,
};

export const respondWithError = (
  res: Response,
  error: ErrorMessage,
  additionalInfo?: string
) => {
  let errorObject: { error: string; additionalInformation?: string } = {
    error: error.msg,
  };
  if (additionalInfo) errorObject.additionalInformation = additionalInfo;
  res.status(error.statusCode).json(errorObject);
};
