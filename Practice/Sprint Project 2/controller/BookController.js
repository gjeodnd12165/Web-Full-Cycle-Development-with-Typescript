/**
 * @author 허대웅
 */

const conn = require('../mariadb');
const { StatusCodes } = require('http-status-codes');

const getBooks = (req, res) => {
  const { category_id, recent_days, list_num = 20, page = 1 } = req.query;

  let sql = `
  SELECT books.*, categories.\`name\` AS category_name FROM books LEFT
  JOIN categories ON books.category_id = categories.id WHERE TRUE
  `;
  let values = [];
  if (category_id) {
    sql += ' AND category_id=?';
    values.push(category_id)
  }
  if (recent_days) {
    sql += ' AND pub_date BETWEEN DATE_SUB(NOW(), INTERVAL ? DAY) AND NOW()'
    values.push(+recent_days);
  }
  sql += ' LIMIT ? OFFSET ?;';
  values.push(+list_num);
  values.push((page-1)*list_num);

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
  const { bookId: book_id } = req.params;
  const { user_id } = req.body;

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
  const values = [user_id, book_id, book_id];
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