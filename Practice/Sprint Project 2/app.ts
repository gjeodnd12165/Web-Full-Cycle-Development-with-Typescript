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
import booksRouter from './routes/books';

app.use('/books', booksRouter);


// post-routing middlewares (including error handlers)
import {
  logError,
  handleAuthError
} from './middleware/error.middleware';

app.use(logError);
app.use(handleAuthError);