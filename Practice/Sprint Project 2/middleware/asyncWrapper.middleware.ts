import * as express from 'express';

export const asyncWrapper = (fn: any) => (
  req: express.Request, 
  res: express.Response, 
  next: express.NextFunction
) => {
  return fn(req, res, next).catch(next);
} 