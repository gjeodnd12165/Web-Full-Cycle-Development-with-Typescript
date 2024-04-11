/**
 * @author 허대웅
 */

const conn = require('../mariadb');
const { StatusCodes } = require('http-status-codes');

const getBooks = (req, res) => {
  const { categoryId, recentDays } = req.query;
  if (categoryId || recentDays) {
    const sql = 'SELECT * FROM books WHERE category_id=?';
    const values = [categoryId];
    conn.query(
      sql, values, (err, results) => {
      if (err) {
        console.log(err);
        return res.status(StatusCodes.BAD_REQUEST).end();
      }
      if (!results.length) {
        return res.status(StatusCodes.NOT_FOUND).end();
      }
      
      return res.status(StatusCodes.OK).json(results);
    });
  }
  else {
    const sql = 'SELECT * FROM books';
    conn.query(
      sql, (err, results) => {
      if (err) {
        console.log(err);
        return res.status(StatusCodes.BAD_REQUEST).end();
      }
      if (!results.length) {
        return res.status(StatusCodes.NOT_FOUND).end();
      }
  
      return res.status(StatusCodes.OK).json(results);
    });
  }
}

const getBook = (req, res) => {
  const { bookId } = req.params;

  const sql = 'SELECT * FROM books WHERE id=?';
  const values = [bookId];
  conn.query(
    sql, values, (err, results) => {
    if (err) {
      console.log(err);
      return res.status(StatusCodes.BAD_REQUEST).end();
    }
    const book = results[0];
    if (!book) {
      return res.status(StatusCodes.NOT_FOUND).end();
    }
    
    return res.status(StatusCodes.OK).json(book);
  });
}

module.exports = {
  getBooks,
  getBook,
}