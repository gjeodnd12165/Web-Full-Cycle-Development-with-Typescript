import * as express from 'express';

export const asyncWrapper = (fn: any) => (
  req: express.Request, 
  res: express.Response, 
  next: express.NextFunction
) => {
  console.log('fn');
  fn(req, res, next)
    .resolve
    .then(() => next(), next);
} 