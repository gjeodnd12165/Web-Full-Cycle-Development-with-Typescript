const express = require('express');
const router = express.Router();

router.use(express.json());


// id -> {pwd, name}
let db = new Map();

// 로그인
router.post('/signin', (req, res) => {
  const {userId, pwd} = req.body;
  if (!db.has(userId)) {
    res.status(404).json({
      message: "해당 유저를 찾을 수 없습니다"
    });
  }
  else if (db.get(userId).pwd !== pwd) {
    res.status(404).json({
      message: "아이디 혹은 비밀번호가 다릅니다"
    });
  }
  else {
    res.json({
      message: "로그인 완료"
    });
  }
});
// 회원가입
router.post('/signup', (req, res) => {
  const {userId, pwd, name} = req.body;
  if (!(userId && pwd && name)) {
    res.status(400).json({
      message: "양식이 잘 못 되었을 수 있습니다"
    });
  }
  else if (db.has(userId)) {
    res.status(400).json({
      message: "id가 중복됩니다"
    });
  }
  else {
    db.set(userId, {
      pwd: pwd,
      name: name
    });
    res.status(201).json({
      message: `${name}님, 환영합니다`
    });
  }
});
// 회원 개별 조회
router
  .route('/users')
  .get((req, res) => {
  const {userId} = req.body;
  if (!db.has(userId)) {
    res.status(404).json({
      message: "해당 유저를 찾을 수 없습니다"
    });
  }
  else {
    res.json(db.get(userId));
  }
})
// 회원 개별 탈퇴
  .delete((req, res) => {
  const {userId} = req.body;
  if (!db.has(userId)) {
    res.status(404).json({
      message: "해당 유저를 찾을 수 없습니다"
    });
  }
  else {
    const name = db.get(userId).name;
    db.delete(userId);
    res.json({
      message: `${name}님, 안녕히가세요`
    });
  }
});

module.exports = router;