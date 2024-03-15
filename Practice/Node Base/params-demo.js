const express = require('express');
const app = express();


app.get('/products/:num', (req, res) => {
  res.json({
    num: req.params.num
  });
});

app.listen(8888);