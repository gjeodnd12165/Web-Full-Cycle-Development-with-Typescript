const express = require('express');
const app = express();
require('dotenv').config();
app.listen(process.env.SERVER_PORT, () => {
  console.log(`Server started, on port ${process.env.SERVER_PORT}`)
});


const userRouter = require('./routes/users');
const channelRouter = require('./routes/channels');

app.use('/', userRouter);
app.use('/channels', channelRouter);