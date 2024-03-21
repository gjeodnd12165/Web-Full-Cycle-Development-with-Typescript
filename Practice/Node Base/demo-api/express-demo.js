const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Hello World');
});

const nodejsBook = {
  title: 'Node.js를 공부해보자',
  price: 20000,
  description: '정말 좋아요'
}

app.get('/products/1', (req, res) => {
  res.json(nodejsBook);
})

app.listen(8888);