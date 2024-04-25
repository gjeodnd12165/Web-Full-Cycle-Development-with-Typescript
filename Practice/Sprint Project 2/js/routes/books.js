const express = require('express');
const router = express.Router();
const { 
  getBooks, getBook 
} = require('../../controller/BookController');

router.use(express.json());

router
.get('/', getBooks)
.get('/:bookId', getBook)


module.exports = router;