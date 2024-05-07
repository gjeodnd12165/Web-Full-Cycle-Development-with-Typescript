import * as express from 'express';
const router = express.Router();
router.use(express.json());

import {
  getBooks,
  getBook
} from '../controller/books.controller';

export default router
.get('/', getBooks)
.get('/:bookId', getBook)