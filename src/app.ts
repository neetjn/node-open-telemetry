require('dotenv').config()

import express from 'express';
import ApiRootController, { Routes as ApiRootRoutes } from './controllers/apiroot';
import TodoController, { Routes as TodoRoutes } from './controllers/todo';

const app = express();
const port = process.env.PORT || 3000;

app.use(ApiRootRoutes.Base, ApiRootController);
app.use(TodoRoutes.Base, TodoController);

app.listen(port, () => {
  return console.log(`server is listening on ${port}`);
});

