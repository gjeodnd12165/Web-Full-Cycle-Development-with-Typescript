const express = require('express');
const app = express();


app.get('/hello', (req, res) => {
  res.json({
    say: '안녕하세요'
  });
});

app.get('/bye', (req, res) => {
  res.json({
    say: '안녕히가세요'
  });
});

app.get('/nicetomeetyou', (req, res) => {
  res.send('만나서 반갑습니다');
});

app.listen(8888);