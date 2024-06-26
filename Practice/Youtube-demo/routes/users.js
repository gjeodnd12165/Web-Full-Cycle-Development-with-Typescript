const express = require('express');
const router = express.Router();
const conn = require('../mariadb');
const { body, param, validationResult } = require('express-validator');
const jwt = require('jsonwebtoken');
require('dotenv').config();


const bodyValidation = (field) => {
  switch (field) {
    case 'email':
      return body('email').notEmpty().isEmail().withMessage('이메일 확인 필요');
    case 'password':
      return body('password').notEmpty().isString().withMessage('비밀번호 확인 필요');
    case 'name':
      return body('name').notEmpty().isString().withMessage('이름 확인 필요');
    case 'contact':
      return body('name').notEmpty().isString().withMessage('전화번호 확인 필요');
    default:
      throw new Error(`There's no appropriate condition in bodyValidation`);
  }
};


const validate = (req, res, next) => {
  const err = validationResult(req);
  if (!err.isEmpty()) {
    return res.status(400).json(err.array());
  }
  return next(); 
};

router.use(express.json());

// 로그인
router
  .post(
  '/signin',
  [
    bodyValidation('email'),
    bodyValidation('password'),
    validate
  ],
  (req, res) => {
  const { email, password } = req.body;
  const sql = `SELECT * FROM users WHERE email = ?`;
  const values = [email];
  conn.query(
    sql, values,
    function (err, results, fields) {
      if(!results?.length) {
        return res.status(403).json({
          message: "아이디 또는 비밀번호가 잘 못 입력되었습니다"
        });
      }
      // results가 존재하는 것을 보장
      const loginUser = results[0];
      if (loginUser.password !== password) {
        return res.status(403).json({
          message: "아이디 또는 비밀번호가 잘 못 입력되었습니다"
        });
      }
      const token = jwt.sign({
        email: loginUser.email,
        name: loginUser.name
      }, process.env.ACCESS_TOKEN_KEY, {
        expiresIn: "5m",
        issuer: "HDW"
      });
      
      res.cookie('youtube-demo', token, {
        httpsOnly: true
      });

      return res.status(200).json({
        message: `${loginUser.name} 님, 환영합니다`
      });
    }
  );
});
// 회원가입
router.post(
  '/signup',
  [
    bodyValidation('email'),
    bodyValidation('name'),
    bodyValidation('password'),
    bodyValidation('contact'),
    validate
  ],
  (req, res) => {
  const { email, name, password, contact} = req.body;

  const sql = `INSERT INTO users (email, name, password, contact)
  VALUES (?, ?, ?, ?)`;
  const values = [email, name, password, contact];
  conn.query(
    sql, values,
    function (err, results, fields) {
      if (err) {
        console.log(err);
        return res.status(400).end();
      }
      return res.status(201).json({
        message: `${name}님, 환영합니다`
      });
    }
  );
});
// 회원 개별 조회
router
  .route('/users')
  .get(
  [
    bodyValidation('email'),
    validate
  ],
  (req, res) => {
    const { email } = req.body;
    const sql = `SELECT * FROM users WHERE email = ?`;
    const values = [email];
    conn.query(
      sql, values,
      function (err, results, fields) {
        if(!results?.length) {
          return res.status(404).json({
            message: "해당 유저를 찾을 수 없습니다"
          });
        }
        return res.status(200).json(results[0]);
      }
    );
})
// 회원 개별 탈퇴
  .delete(
  [
    bodyValidation('email'),
    validate,    
  ],
  (req, res) => {
    const { email } = req.body;
    const sql = `DELETE FROM users WHERE email = ?`;
    const values = [email];
    conn.query(
      sql, values,
      function (err, results, fields) {
        if (err) {
          console.log(err);
          return res.status(400).end();
        }
        if (results.affectedRows === 0) {
          return res.status(400).end();
        }
        return res.status(200).json(results);
      }
    );
});

module.exports = router;