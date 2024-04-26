import * as express from 'express';
import jsonwebtoken from 'jsonwebtoken';
import { StatusCodes } from 'http-status-codes';

const logError = (
  err: Error, 
  req: express.Request,
  res: express.Response, 
  next: express.NextFunction
  ) => {
  console.error(`
  === This is from logError  ===
  ${err.stack}
  === This was from logError ===
  `);
  next(err);
}

/**
 * Handles errors related to authorization
 */
const handleAuthError = (
  err: Error, 
  req: express.Request,
  res: express.Response, 
  next: express.NextFunction
  ) => {
  if (err instanceof jsonwebtoken.JsonWebTokenError) {
    res.status(StatusCodes.UNAUTHORIZED).json({
      "message": "적절하지 않은 토큰입니다"
    });
  }
  else if (err instanceof jsonwebtoken.TokenExpiredError) {
    res.status(StatusCodes.UNAUTHORIZED).json({
      "message": "토큰이 만료되었습니다"
    });
  }
  else {
    next(err);
  }
}

const handleVarError = (
  err: Error, 
  req: express.Request,
  res: express.Response, 
  next: express.NextFunction
) => {
  if (err instanceof IdNotConvertableError) {
    res.status(StatusCodes.BAD_REQUEST).end();
  }
  else {
    next();
  }
}

export {
  logError,
  handleAuthError,
  handleVarError
};