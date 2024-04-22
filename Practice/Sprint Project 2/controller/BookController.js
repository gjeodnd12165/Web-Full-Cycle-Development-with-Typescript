/**
 * @author 허대웅
 */

const conn = require('../mariadb');
const { StatusCodes } = require('http-status-codes');

const getBooks = (req, res) => {
  const { categoryId, recentDays, listNum = 20, page = 1 } = req.query;

  let sql = `
  SELECT books.*, categories.\`name\` AS category_name FROM books LEFT
  JOIN categories ON books.category_id = categories.id WHERE TRUE
  `;
  let values = [];
  if (categoryId) {
    sql += ' AND category_id=?';
    values.push(categoryId)
  }
  if (recentDays) {
    sql += ' AND pub_date BETWEEN DATE_SUB(NOW(), INTERVAL ? DAY) AND NOW()'
    values.push(+recentDays);
  }
  sql += ' LIMIT ? OFFSET ?;';
  values.push(+listNum);
  values.push((page-1)*listNum);

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

const getBook = (req, res) => {
  const { bookId } = req.params;
  const { userId } = req.body;

  const sql = `
  SELECT books.*, 
    categories.\`name\` AS category_name,
    (SELECT COUNT(*) FROM likes WHERE likes.book_id=books.id) AS likes,
    EXISTS (SELECT * FROM likes WHERE user_id=? AND book_id=?) AS is_liked
  FROM books LEFT
  JOIN categories 
  ON books.category_id = categories.id 
  WHERE books.id = ?
  `;
  const values = [userId, bookId, bookId];
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