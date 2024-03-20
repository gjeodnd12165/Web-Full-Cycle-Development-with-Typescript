const express = require('express');
const app = express();
app.listen(8888, () => {
  console.log(`Server Started. Listen on ${8888}`);
});


app.get('/', (req, res) => {
  res.send('Hello World');
});

let youtuber1 = {
  channelTitle: "십오야",
  sub: 5930000,
  videoNum: 993
}
let youtuber2 = {
  channelTitle: "침착맨",
  sub: 2270000,
  videoNum: 6600
}
let youtuber3 = {
  channelTitle: "테오",
  sub: 548000,
  videoNum: 726
}

const db = new Map();
let id = 1;

db.set(id++, youtuber1);
db.set(id++, youtuber2);
db.set(id++, youtuber3);


// query all the youtubers
app.get('/youtubers', (req, res) => {
  res.json([...db.values()]);
});

// query the youtuber by id
app.get('/youtubers/:id', (req, res) => {
  const id = +req.params.id;

  const youtuber = db.get(id);
  if(youtuber === undefined) {
    return res.json({
      message: "유튜버의 정보를 찾을 수 없습니다."
    });
  } else {
    return res.json({
      id: id,
      ...youtuber
    });
  }
});

app.use(express.json()); // http 외 모듈인 미들웨어 json 설정
// register the youtuber by id
app.post('/youtubers', (req, res) => {
  const { channelTitle } = req.body;
  db.set(id++, {
    channelTitle: channelTitle,
    sub: 0,
    videoNum: 0
  });
  res.json({
    message: `${db.get(id-1).channelTitle} 님, 유튜버가 되신 것을 축하합니다!`
  });
});