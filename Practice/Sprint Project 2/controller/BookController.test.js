const models = require('../models/index');

const getBooks = async (req, res) => {
  const books = await models.books.findAll();
  res.status(200).json(books);
}

module.exports = {
  getBooks
}