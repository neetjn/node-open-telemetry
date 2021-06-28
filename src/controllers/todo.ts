import { Router, Request, Response } from 'express';
import {
  getTodoCollection,
  getTodoById,
  todoToDto,
  todoCollectionToDto,
} from '../core/todo';
import {
  ITodo,
  ITodoDto,
} from '../models/todo';
import { getHref } from '../utils';
import { Methods } from '../enums';

const router: Router = Router();

export enum Routes {
  Base = '/todo',
  TodoCollection = '/',
  Todo = '/:id',
}

export enum RelMap {
  Self = 'self',
  TodoCollection = 'todo-collection',
  Todo = 'todo',
}

const toDto = (todo: ITodo, req: Request): ITodoDto => {
  const { id } = todo;
  const path = `${Routes.Base}${Routes.Todo.replace(':id', id.toString())}`;
  const href = getHref(req, path);
  return todoToDto(todo, href, [{
    href,
    rel: RelMap.Self,
    methods: [Methods.Get],
  }]);
};

router.get(Routes.TodoCollection, (req: Request, res: Response) => {
  const collection = getTodoCollection();
  const items = collection.items.map(todo => toDto(todo, req));
  const href = getHref(req, Routes.TodoCollection);
  const dto = todoCollectionToDto(items, href, [{
    href,
    rel: RelMap.Self,
    methods: [Methods.Get],
  }]);
  res.json(dto);
});

router.get(Routes.Todo, (req: Request, res: Response) => {
  const { params: { id } } = req;
  const todo = getTodoById(parseInt(id, 10));
  if (todo) {
    res.json(toDto(todo, req));
    return;
  }
  res.status(404).json({
    error: 'Not Found',
  });
});

export default router;

