import {
  searchCategories
} from '../services/categories.service';
import * as express from 'express';
import { StatusCodes } from 'http-status-codes';


export async function getCategories (req: express.Request, res: express.Response) {
  const categories = await searchCategories();
  
  return res.status(StatusCodes.OK).json(categories);
}