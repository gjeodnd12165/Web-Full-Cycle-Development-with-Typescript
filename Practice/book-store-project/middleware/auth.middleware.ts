import * as express from 'express';
import * as jwt from "jsonwebtoken";
import { configDotenv } from "dotenv";
configDotenv();
import { DecodedToken } from '../types/token';

export const decodeToken = (req: express.Request, res: express.Response, next: express.NextFunction): void => {
  let recievedToken: string | undefined;
  let decodedToken: DecodedToken | undefined;

  if (req.header("Authorization")) {
    recievedToken = req.header("Authorization").replace("Bearer ", "");
    decodedToken = jwt.verify(recievedToken, process.env.ACCESS_TOKEN_KEY) as DecodedToken;
  }
  req.token = decodedToken;

  next();
}