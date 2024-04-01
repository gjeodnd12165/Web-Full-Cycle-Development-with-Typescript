const express = require('express');
const router = express.Router();
const conn = require('../mariadb');

router.use(express.json());



router
  .route('/')
// 채널 생성
  .post((req, res) => {        
    const { name, userId } = req.body;
    if (!(name && userId)) {
      return res.status(400).json({
        message: `양식이 잘 못 되었을 수 있습니다`
      });
    }
    
    const sql = `INSERT INTO channels (name, user_id)
    VALUES (?, ?)`;
    const values = [name, userId];
    conn.query(
      sql, values,
      function (err, results, fields) {
        // users checking
        res.status(201).json({
          message: `${name} 채널이 생성되었습니다`
        });
      }
    );
})
// 채널 전체 조회
  .get((req, res) => {
    const { userId } = req.body;
    if (!userId) {
      return res.status(404).json({
        message: "로그인이 필요한 페이지입니다"
      });
    }

    const sql = `SELECT * FROM channels WHERE user_id = ?`;
    const values = [userId];
    conn.query(
      sql, values,
      function (err, results, fields) {
        if(!results?.length) {
          channelNotFound(res);
          return;
        }
        return res.status(200).json(results);
      }
    );
})
router
  .route('/:id')
// 채널 개별 수정
  .put((req, res) => {
    const { id } = req.params;
    const { channelTitle } = req.body;
    if (!db.has(id)) {
      channelNotFound(res);
    }
    else {
      const channel = db.get(id);
      db.set(id, {
        ...channel,
        channelTitle: channelTitle
      });
      res.status(200).json({
        message: `해당하는 채널이 ${channel.channelTitle}에서 ${channelTitle}로 변경되었습니다`
      });
    }
})
//채널 개별 삭제
  .delete((req, res) => {
    const { id } = req.params;
    if (!db.has(id)) {
      channelNotFound(res);
    }
    else {
      const { channelTitle } = db.get(id); 
      db.delete(id);
      res.status(200).json({
        message: `${channelTitle} 채널이 삭제되었습니다`
      })
    }
})
//채널 개별 조회
  .get((req, res) => {
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