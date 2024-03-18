const express = require('express');
const app = express();


let db = new Map();
db.set(1, "NoteBook");
db.set(2, "Cup");
db.set(3, "Chair");

app.get('/:id', (req, res) => {
  const { id } = req.params;

  res.json({
    id: id,
    name: db.get(+id) ?? "없습니다"
  })
});


app.listen(8888);