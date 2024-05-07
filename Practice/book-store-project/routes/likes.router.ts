import * as express from 'express';
const router = express.Router();
router.use(express.json());

import {
  createUserLikeBook,
  deleteUserLikeBook
} from '../controller/likes.controller';

export default router
.post('/:bookId', createUserLikeBook)
.delete('/:bookId', deleteUserLikeBook)
