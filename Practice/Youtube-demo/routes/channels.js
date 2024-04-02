const express = require('express');
const router = express.Router();
const conn = require('../mariadb');
const { body, param, validationResult } = require('express-validator');

router.use(express.json());


const validate = (req, res) => {
  const err = validationResult(req);
  if (!err.isEmpty()) {
    return res.status(400).json(err.array());
  }
}

router
  .route('/')
// 채널 생성
  .post([
      body('userId').notEmpty().isInt().withMessage('숫자를 입력해주세요'),
      body('name').notEmpty().isString().withMessage('문자를 입력해주세요'),
    ], 
    (req, res) => {

    const { name, userId } = req.body;
    
    const sql = `INSERT INTO channels (name, user_id)
    VALUES (?, ?)`;
    const values = [name, userId];
    conn.query(
      sql, values,
      function (err, results, fields) {
        if (err) {
          console.log(err);
          return res.status(400).end();
        }
        res.status(201).json(results);
      }
    );
})
// 채널 전체 조회
  .get([
    body('userId').notEmpty().isInt().withMessage('유저 id 필요'),
    validate
  ], 
  (req, res) => {
    const { userId } = req.body;

    const sql = `SELECT * FROM channels WHERE user_id = ?`;
    const values = [userId];
    conn.query(
      sql, values,
      function (err, results, fields) {
        if (err) {
          console.log(err);
          return res.status(400).end();
        }
        return res.status(200).json(results);
      }
    );
})
router
  .route('/:id')
// 채널 개별 수정
  .put([
      param('id').notEmpty().isInt().withMessage('채널 id 오류'),
      body('channelTitle').notEmpty().isString().withMessage('새로운 타이틀 오류')
    ],
    (req, res) => {
    const { id } = req.params;
    const { channelTitle } = req.body;
    
    const sql = `UPDATE channels SET name = ?
                 WHERE id = ?`;
    const values = [channelTitle, id];
    conn.query(sql, values,
      (err, results, fields) => {
        if (err) {
          console.log(err);
          return res.status(400).end();
        }
        if (results.affectedRows === 0) {
          return res.status(400).end();
        }
        return res.status(200).json(results);
      });
})
//채널 개별 삭제
  .delete([
    param('id').notEmpty().isInt().withMessage('채널 id 오류'),
  ],
  (req, res) => {
  
  const { id } = req.params;
  
  const sql = `DELETE FROM channels 
               WHERE id = ?`;
  const values = [id];
  conn.query(sql, values,
    (err, results, fields) => {
      if (err) {
        console.log(err);
        return res.status(400).end();
      }
      if (results.affectedRows === 0) {
        return res.status(400).end();
      }
      return res.status(200).json(results);
    });
})
//채널 개별 조회
  .get([
    param('id').notEmpty().isInt().withMessage('채널 id 오류')
  ],
    (req, res) => {

    const { id } = req.params;
    const sql = `SELECT * FROM channels WHERE id = ?`;
    const values = [id];
    conn.query(
      sql, values,
      function (err, results, fields) {
        if(!results?.length) {
          channelNotFound(res);
          return;
        }
        return res.status(200).json(results[0]);
      }
    );
});

const channelNotFound = (res) => {
  res.status(404).json({
    message: `해당하는 채널이 존재하지 않습니다`
  });
}


module.exports = router;