import express from "express";
const app: express.Express = express();

import { configDotenv } from "dotenv";
configDotenv();

app.listen(process.env.SERVER_PORT, () => {
  console.log(`Server started, on port ${process.env.SERVER_PORT}`)
});

// pre-routing middlewares
import decodeToken from "./middleware/auth.middleware";

app.use(decodeToken);

// routing middlewares
import booksRouter from './routes/books.router';
import likesRouter from './routes/likes.router';
import categoriesRouter from "./routes/categories.router";
import usersRouter from "./routes/users.router";

app.use('/books', booksRouter);
app.use('/likes', likesRouter);
app.use('/categories', categoriesRouter);
app.use('/users', usersRouter);


// post-routing middlewares (including error handlers)
import {
  logError,
  handleAuthError,
  handleVarError
} from './middleware/error.middleware';

app.use(logError);
app.use(handleAuthError);
app.use(handleVarError);