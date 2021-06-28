import Data from './bin/todolist.json';
import { ILinkDto } from '../models/apiroot';
import {
  ITodo,
  ITodoCollection,
  ITodoDto,
  ITodoCollectionDto,
} from '../models/todo';

export const getTodoCollection = (pageStart: number = 0, pageEnd: number = 1000): ITodoCollection => ({
  items: Data.slice(pageStart, pageEnd),
});

export const getTodoById = (id: number): ITodo =>
  Data.find(({ id: fId }) => id === fId) as ITodo;

export const todoToDto = (todo: ITodo, href: string, links: Array<ILinkDto>): ITodoDto => ({
  ...todo,
  href,
  links,
});

export const todoCollectionToDto = (items: Array<ITodoDto>, href: string, links: Array<ILinkDto>): ITodoCollectionDto => ({
  items,
  href,
  links,
});

