import {
  insertLike,
  deleteLike
} from '../services/likes.service';
import * as express from 'express';
import { StatusCodes } from 'http-status-codes';

export async function createUserLikeBook (req: express.Request, res: express.Response) {
  const { bookId } = req.params;
  const userId = req.token.id;

  const result = await insertLike(bookId, userId);

  return res.status(StatusCodes.OK).json(result);
}

export async function deleteUserLikeBook (req: express.Request, res: express.Response) {
  const { bookId } = req.params;
  const userId = req.token.id;

  const result = await deleteLike(bookId, userId);

  return res.status(StatusCodes.OK).json(result);
}