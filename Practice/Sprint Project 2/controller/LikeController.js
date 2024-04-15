/**
 * @author 허대웅
 */

const conn = require('../mariadb');
const { StatusCodes } = require('http-status-codes');

const addLike = (req, res) => {
  const { bookId: book_id } = req.params; 
  const { user_id } = req.body;
  
  const sql = 'INSERT INTO likes (user_id, book_id) VALUES(?, ?)';
  const values = [user_id, book_id];
  conn.query(
    sql, values, 
    (err, results) => {
    if (err) {
      console.log(err);
      return res.status(StatusCodes.BAD_REQUEST).end();
    }
    
    return res.status(StatusCodes.CREATED).json(results);
  });
}

const removeLike = (req, res) => {
  const { bookId: book_id } = req.params; 
  const { user_id } = req.body;
  
  const sql = 'DELETE FROM likes WHERE user_id=? AND book_id=?';
  const values = [user_id, book_id];
  conn.query(
    sql, values, 
    (err, results) => {
    if (err) {
      console.log(err);
      return res.status(StatusCodes.BAD_REQUEST).end();
    }
    if (results.affectedRows === 0) {
      return res.stataus(StatusCodes.NOT_FOUND).end();
    }
    
    return res.status(StatusCodes.OK).json(results);
  });
}

module.exports = {
  addLike, 
  removeLike
};