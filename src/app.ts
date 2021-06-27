import express from 'express';
import TodoController from './controllers/todo';

const app = express();
const port = 3000;

app.use('/todo', TodoController);

app.get('/', (req, res) => {
  res.send('app is running!');
});

app.listen(port, () => {
  return console.log(`server is listening on ${port}`);
});

