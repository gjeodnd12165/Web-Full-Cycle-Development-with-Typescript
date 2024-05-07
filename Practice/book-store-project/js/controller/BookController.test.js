const {
  searchBooks,
  searchBook
} = require('../services/books');

const getBooks = async (req, res) => {
  const { categoryId, recentDays, listNum, page } = req.query;

  const books = await searchBooks(categoryId, recentDays, listNum, page);

  return res.status(200).json(books);
}

const getBook = async (req, res) => {
  const { bookId } = req.params;
  const userId = req.token.id;

  const book = await searchBook(bookId, userId);

  return res.status(200).json(book);
}

module.exports = {
  getBooks,
  getBook
}