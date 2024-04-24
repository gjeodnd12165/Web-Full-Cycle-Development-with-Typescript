const express = require('express');
const { faker } = require('@faker-js/faker');
const app = express();
require('dotenv').config();

app.listen(process.env.SERVER_PORT, () => {
  console.log(`Server started, on port ${process.env.SERVER_PORT}`)
});

app.get('/fake/user/:count', (req, res) => {
  const count = parseInt(req.params.count);
  
  const data = [];
  for (let i = 0;i < count;i++) {
    data.push(randomUser());
  }
  res.status(200).json(data);
});

function randomUser() {
  return {
    userName: faker.internet.userName(),
    email: faker.internet.email(),
    password: faker.internet.password(),
    fullName: faker.person.fullName(),
    contact: faker.phone.number()
  }
}