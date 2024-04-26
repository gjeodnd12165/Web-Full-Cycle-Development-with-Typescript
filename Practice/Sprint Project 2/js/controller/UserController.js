const conn = require('../../mariadb');
const { StatusCodes } = require('http-status-codes');
const jwt = require('jsonwebtoken');
const crypto = require('crypto');
require('dotenv').config();


const signup = (req, res) => {
  const { email, username, password } = req.body;

  const salt = crypto.randomBytes(10).toString('base64');
  const hashedPassword = crypto.pbkdf2Sync(password, salt, 10000, 10, 'sha512').toString('base64');

  const sql = 'INSERT INTO users (email, username, password, salt) VALUES(?, ?, ?, ?)';
  const values = [email, username, hashedPassword, salt];
  conn.query(
    sql, values,
    (err, results) => {
      if (err) {
        console.log(err);
        return res.status(StatusCodes.BAD_REQUEST).end();
      }

      return res.status(StatusCodes.CREATED).end();
    }
  )
}

const signin = (req, res) => {
  const { email, password } = req.body;
  
  const sql = 'SELECT * FROM users WHERE email = ?';
  const values = [email];
  conn.query(
    sql, values, (err, results) => {
    if (err) {
      console.log(err);
      return res.status(StatusCodes.BAD_REQUEST).end();
    }

    const loginUser = results[0];
    const hashedPassword = crypto.pbkdf2Sync(password, loginUser.salt, 10000, 10, 'sha512').toString('base64');

    console.log(loginUser);
    console.log(hashedPassword);
    if (!loginUser || loginUser.password !== hashedPassword) {
      return res.status(StatusCodes.UNAUTHORIZED).end();
    }

    const token = jwt.sign({
      id: loginUser.id,
      email: loginUser.email,
      name: loginUser.name
    }, process.env.ACCESS_TOKEN_KEY, {
      issuer: "HDW"
    });
    res.cookie('SprintProject2', token, {
      httpsOnly: true
    });

    return res.status(StatusCodes.OK).end();
  });
}

const requestReset = (req, res) => {
  const { email } = req.body;
  
  const sql = 'SELECT * FROM users WHERE email = ?';
  const values = [email];
  conn.query(
    sql, values, (err, results) => {
    if (err) {
      console.log(err);
      return res.status(StatusCodes.BAD_REQUEST).end();
    }

    const loginUser = results[0];
    const salt = loginUser.salt;
    if (!loginUser) {
      return res.status(StatusCodes.NOT_FOUND).end();
    }

    return res.status(StatusCodes.OK).json({
      email: email
    });
  });
}

const reset = (req, res) => {
  const { email, password } = req.body;
  
  const salt = crypto.randomBytes(10).toString('base64');
  const hashedPassword = crypto.pbkdf2Sync(password, salt, 10000, 10, 'sha512').toString('base64');

  const sql = 'UPDATE users SET password = ?, salt = ? WHERE email = ?';
  const values = [hashedPassword, salt, email];
  conn.query(
    sql, values, (err, results) => {
    if (err) {
      console.log(err);
      return res.status(StatusCodes.BAD_REQUEST).end();
    }

    if (results.affectedRows === 0) {
      return res.status(StatusCodes.BAD_REQUEST).end();
    }

    return res.status(StatusCodes.OK).end();
  });
}

module.exports = {
  signup, 
  signin, 
  requestReset, 
  reset
};