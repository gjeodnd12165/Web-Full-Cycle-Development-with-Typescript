const nodejsBook = {
  title: 'Node.js를 공부해보자',
  price: 20000,
  description: '정말 좋아요'
}

function print(book) {
  console.log(book.title);
  console.log(book.price);
  console.log(book.description);
}

print(nodejsBook);