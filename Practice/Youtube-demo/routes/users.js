const express = require('express');
const router = express.Router();

const conn = require('../mariadb');


router.use(express.json());

// 로그인
router.post('/signin', (req, res) => {
  const { email, password } = req.body;
  const sql = `SELECT * FROM users WHERE email = ?`;
  const values = [email];
  conn.query(
    sql, values,
    function (err, results, fields) {
      if(!results?.length) {
        return res.status(404).json({
          message: "아이디 또는 비밀번호가 잘 못 입력되었습니다"
        });
      }
      // results가 존재하는 것을 보장
      const loginUser = results[0];
      if (loginUser.password !== password) {
        return res.status(404).json({
          message: "아이디 또는 비밀번호가 잘 못 입력되었습니다"
        });
      }
      return res.status(200).json({
        message: `${loginUser.name} 님, 환영합니다`
      });
    }
  );
});
// 회원가입
router.post('/signup', (req, res) => {
  const { email, name, password, contact} = req.body;
  if (!(email && name && password )) {
    return res.status(400).json({
      message: "양식이 잘 못 되었을 수 있습니다"
    });
  }

  const sql = `INSERT INTO users (email, name, password, contact)
  VALUES (?, ?, ?, ?)`;
  const values = [email, name, password, contact];
  conn.query(
    sql, values,
    function (err, results, fields) {
      return res.status(201).json({
        message: `${name}님, 환영합니다`
      });
    }
  );
});
// 회원 개별 조회
router
  .route('/users')
  .get((req, res) => {
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
  .delete((req, res) => {
  const { email } = req.body;
  const sql = `DELETE FROM users WHERE email = ?`;
  const values = [email];
  conn.query(
    sql, values,
    function (err, results, fields) {
      return res.status(200).json(results);
    }
  );
});

module.exports = router;