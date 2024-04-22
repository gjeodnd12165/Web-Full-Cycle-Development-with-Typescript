const jwt = require('jsonwebtoken');
require('dotenv').config();


const token = jwt.sign({
  foo: "bar"
}, process.env.SECRET_KEY);

console.log(token);

jwt.verify(token, process.env.SECRET_KEY,
  (err, decoded) => {
    if (err) {
      console.log(err);
    }
    console.log(decoded);
  }
);