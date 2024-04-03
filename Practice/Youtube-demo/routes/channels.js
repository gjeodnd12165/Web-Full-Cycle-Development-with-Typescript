const express = require('express');
const router = express.Router();
const conn = require('../mariadb');
const { body, param, validationResult } = require('express-validator');

router.use(express.json());


const bodyValidation = (field) => {
  switch (field) {
    case 'name':
      return body('name').notEmpty().isString().withMessage('');
    case 'userId':
      return body('userId').notEmpty().isInt().withMessage('숫자를 입력해주세요');
    default:
      throw new Error(`There's no appropriate condition in bodyValidation`);
  }
};

const paramValidation = (field) => {
  switch (field) {
    case 'id':
      return param('id').notEmpty().isInt().withMessage('채널 id 오류');
    default:
      throw new Error(`There's no appropriate condition in paramValidation`);
  }
};

const validate = (req, res, next) => {
  const err = validationResult(req);
  if (!err.isEmpty()) {
    return res.status(400).json(err.array());
  }
  return next(); 
};

router
  .route('/')
// 채널 생성
  .post([
      bodyValidation('userId'),
      bodyValidation('name'),
      validate,
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
    bodyValidation('userId'),
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
});
router
  .route('/:id')
// 채널 개별 수정
  .put([
      paramValidation('id'),
      bodyValidation('name'),
      validate,
    ],
    (req, res) => {
    const { id } = req.params;
    const { name } = req.body;
    
    const sql = `UPDATE channels SET name = ?
                 WHERE id = ?`;
    const values = [name, id];
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
    paramValidation('id'),
    validate,
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
    paramValidation('id'),
    validate,
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
};


module.exports = router;