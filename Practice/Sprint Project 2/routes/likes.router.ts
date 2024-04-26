import * as express from 'express';
const router = express.Router();
router.use(express.json());

import {
  createUserLikeBook,
  deleteUserLikeBook
} from '../controller/likes.controller';

router
.post('/:bookId', createUserLikeBook)
.delete('/:bookId', deleteUserLikeBook)


module.exports = router;