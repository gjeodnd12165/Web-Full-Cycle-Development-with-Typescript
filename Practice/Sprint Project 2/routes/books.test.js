const express = require('express');
const router = express.Router();

router.use(express.json());
const {
  getBooks
} = require('../controller/BookController.test');

router
.get('/', getBooks);


module.exports = router;