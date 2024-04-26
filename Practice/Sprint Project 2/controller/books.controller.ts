import {
  searchBooks,
  searchBook
} from '../services/books.service';
import * as express from 'express';
import { StatusCodes } from 'http-status-codes';

export async function getBooks (
  req: express.Request<{}, {}, {}, {
    categoryId?: string,
    recentDays?: string,
    listNum?: string,
    page?: string
  }>, 
  res: express.Response
) {
  const { categoryId, recentDays, listNum, page } = req.query;

  const books = await searchBooks(categoryId, recentDays, listNum, page);

  return res.status(StatusCodes.OK).json(books);
}

export async function getBook (req: express.Request, res: express.Response) {
  const { bookId } = req.params;
  const userId = req.token.id;

  const book = await searchBook(bookId, userId);

  return res.status(200).json(book);
}