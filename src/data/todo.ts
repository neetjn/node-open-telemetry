import Data from './bin/todolist.json';
import { ITodoItem, ITodoList } from '../models/todo';

export const getTodoList = (pageStart: number = 0, pageEnd: number = 1000): ITodoList => ({
  items: Data.slice(pageStart, pageEnd),
});

export const getTodoItemById = (id: number): ITodoItem =>
  Data.find(({ id: fId }) => id === fId) as ITodoItem;

