const express = require('express');
const app = express();


app.get('/products/:num', (req, res) => {
  res.json({
    num: req.params.num
  });
});

// app.get('/:nickname', (req, res) => {

//   const container = req.params;

//   res.json({
//     channel: container.nickname
//   });
// });

app.get('/watch', (req, res) => {
  const { v, t } = req.query;
  console.log(v);
  console.log(t);
  
  res.json(q);
});

app.listen(8888);