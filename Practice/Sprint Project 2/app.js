/**
 * @author 허대웅
 */

const express = require('express');

const app = express();
require('dotenv').config();

app.listen(process.env.SERVER_PORT, () => {
  console.log(`Server started, on port ${process.env.SERVER_PORT}`)
});

// pre-routing middlewares
const authMiddleware = require('./middleware/auth.middleware');
const { toCamel } = require('./middleware/caseConverter.middleware');

app.use(authMiddleware);
app.use(toCamel);

// routing middlewares
const userRouter = require('./routes/users');
const bookRouter = require('./routes/books');
const likeRouter = require('./routes/likes');
const cartRouter = require('./routes/cart');
const orderRouter = require('./routes/orders');
const categoryRouter = require('./routes/categories');

app.use('/users', userRouter);
app.use('/books', bookRouter);
app.use('/likes', likeRouter);
app.use('/cart', cartRouter);
app.use('/orders', orderRouter);
app.use('/categories', categoryRouter);

// post-routing middlewares (including error handlers)
const {
  handleAuthError
} = require('./middleware/error.middleware');

app.use(handleAuthError);