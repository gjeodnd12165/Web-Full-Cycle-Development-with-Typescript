const express = require('express');
const app = express();
app.listen(8888);


app.get('/', (req, res) => {
  res.send('Hello World');
});

let youtuber1 = {
  channelTitle: "십오야",
  sub: "593만명",
  videoNum: "993개"
}
let youtuber2 = {
  channelTitle: "침착맨",
  sub: "227만명",
  videoNum: "6.6천개"
}
let youtuber3 = {
  channelTitle: "테오",
  sub: "54.8만명",
  videoNum: "726개"
}

const db = new Map();
db.set(1, youtuber1);
db.set(2, youtuber2);
db.set(3, youtuber3);

app.get('/youtuber/:id', (req, res) => {
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
})