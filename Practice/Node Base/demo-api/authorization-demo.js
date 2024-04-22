const express = require('express');
const app = express();
const jwt = require('jsonwebtoken');
require('dotenv').config();


app.get('/jwt', (req, res) => {
  const token = jwt.sign({
    foo: "bar"
  }, process.env.SECRET_KEY, {
    issuer: 'HDW'
  });

  res.cookie('jwt', token, {
    httpOnly: true
  });
  res.status(200).send("토큰 발행 완료!");
});

app.get('/authorization', (req, res) => {
  const token = req.header("Authorization");
  
  
  
  res.status(200).send(token);
});

app.listen(8888, () => {
  console.log("----SERVER STARTED----");
});