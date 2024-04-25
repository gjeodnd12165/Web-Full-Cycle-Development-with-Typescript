const conn = require('../../mariadb');
const { StatusCodes } = require('http-status-codes');

const getBooks = async (req, res) => {
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
  const [books] = await conn.promise().execute(sql, values);

  sql = `SELECT found_rows() AS count;`;
  const [totalBooks] = await conn.promise().execute(sql);

  if (!books || !books.length) {
    throw new Error("NOT FOUND");
    // return res.status(StatusCodes.NOT_FOUND).end();
  }

  return res.status(StatusCodes.OK).json({
    books: books,
    paginations: {
      totalBooks: totalBooks[0].count,
      listNum: parseInt(listNum),
      currentPage: parseInt(page)
    }
  });
}

const getBook = (req, res) => {
  const { bookId } = req.params;
  const userId = req.token.id;

  let ph1 = "";
  let values = [bookId];
  
  if (userId) {
    ph1 = `,
    EXISTS (SELECT * FROM likes WHERE user_id=? AND book_id=?) AS is_liked`;
    values.unshift(userId, bookId);
  }

  const sql = `
  SELECT books.*, 
    categories.\`name\` AS category_name,
    (SELECT COUNT(*) FROM likes WHERE likes.book_id=books.id) AS likes${ph1}
  FROM books LEFT
  JOIN categories 
  ON books.category_id = categories.id 
  WHERE books.id = ?
  `;
  console.log(values);
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