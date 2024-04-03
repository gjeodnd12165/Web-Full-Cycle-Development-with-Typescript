const jwt = require('jsonwebtoken');
require('dotenv').config();


const token = jwt.sign({
  foo: "bar"
}, process.env.SECRET_KEY);

jwt.verify(token, process.env.SECRET_KEY,
  (err, decoded) => {
    if (err) {
      console.log(err);
    }
    console.log(decoded);
  }
);