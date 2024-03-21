const express = require('express');
const app = express();


let db = new Map();
db.set(1, {
  productName: "Notebook",
  price: 2000000
});
db.set(2, {
  productName: "Cup",
  price: 7000
});
db.set(3, {
  productName: "Chair",
  price: 150000
});
db.set(4, {
  productName: "Poster",
  price: 20000
});

app.get('/:id', (req, res) => {
  const { id } = req.params;

  if (db.get(+id) === undefined) {
    res.json({
      message: "없는 상품"
    });
  } else {
    const product = db.get(+id);
    product.id = +id;
    res.json(product);
  }
});


app.listen(8888);