const express = require('express');
const router = express.Router();

router.use(express.json());
const {
  getBooks,
  getBook
} = require('../controller/BookController.test');

router
.get('/', getBooks)
.get('/:bookId', getBook)


module.exports = router;