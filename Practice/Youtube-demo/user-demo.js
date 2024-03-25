const express = require('express');
const app = express();
app.listen(7777, () => console.log(`Server started, on port ${7777}`));

app.use(express.json());


// id -> {pwd, name}
let db = new Map();

// 로그인
app.post('/signin', (req, res) => {
  const {id, pwd} = req.body;
  if (!db.has(id)) {
    res.status(404).json({
      message: "해당 유저를 찾을 수 없습니다"
    });
  }
  else if (db.get(id).pwd !== pwd) {
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
app.post('/signup', (req, res) => {
  const {id, pwd, name} = req.body;
  if (!(id && pwd && name)) {
    res.status(400).json({
      message: "양식이 잘 못 되었을 수 있습니다"
    });
  }
  else if (db.has(id)) {
    res.status(400).json({
      message: "id가 중복됩니다"
    });
  }
  else {
    db.set(id, {
      pwd: pwd,
      name: name
    });
    res.status(201).json({
      message: `${name}님, 환영합니다`
    });
  }
});
// 회원 개별 조회
app
  .route('/users/:id')
  .get((req, res) => {
  const {id} = req.params;
  if (!db.has(id)) {
    res.status(404).json({
      message: "해당 유저를 찾을 수 없습니다"
    });
  }
  else {
    res.json(db.get(id));
  }
})
// 회원 개별 탈퇴
  .delete((req, res) => {
  const {id} = req.params;
  if (!db.has(id)) {
    res.status(404).json({
      message: "해당 유저를 찾을 수 없습니다"
    });
  }
  else {
    const name = db.get(id).name;
    db.delete(id);
    res.json({
      message: `${name}님, 안녕히가세요`
    });
  }
});