const express = require('express');
const app = express();

app.listen(1234, () => console.log(`listen on port: ${1234}`));

const fruits = [
  {
    id: 1, 
    name: "apple",
  },
  {
    id: 2,
    name: "orange",
  },
  {
    id: 3,
    name: "strawberry"
  },
  {
    id: 4,
    name: "banana"
  }
];

//과일 전체 조회
app.get('/fruits', (req, res) => {
  res.status(200).json(fruits);
});

//과일 개별 조회
app.get('/fruits/:id', (req, res) => {
  const id = +req.params.id;
  let fruit = fruits.find(f => f.id === id);
  

  if(fruit) {
    res.json(fruit);
  } else {
    res.status(404).json({
      "message": `id: ${id}에 해당하는 과일 없음`
    });
  }
})

