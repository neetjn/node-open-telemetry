import { Router, Request, Response } from 'express';
import { getTodoList, getTodoItemById } from '../data/todo';

const router: Router = Router();

router.get('/', (req: Request, res: Response) => {
  const todoList = getTodoList();
  res.json(todoList);
});

router.get('/:id', (req: Request, res: Response) => {
  const { params: { id } } = req;
  const todoItem = getTodoItemById(parseInt(id, 10));
  res.send(todoItem);
});

export default router;

