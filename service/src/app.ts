require('dotenv').config()

import { Application } from 'express';
import ApiRootController, { Routes as ApiRootRoutes } from './controllers/apiroot';
import TodoController, { Routes as TodoRoutes } from './controllers/todo';

const express = require('express');

const app: Application = express();
const port = process.env.PORT || 3000;

app.use(ApiRootRoutes.Base, ApiRootController);
app.use(TodoRoutes.Base, TodoController);

export const server = app.listen(port, () => {
  return console.log(`server is listening on ${port}`);
});

export default app;

