import { IApiRootDto } from './apiroot';

export interface ITodo {
  id: number;
  title: string;
  description: string;
  createdDate: string;
  modifiedDate?: string;
}

export interface ITodoCollection {
  items: Array<ITodo>;
}

export type ITodoDto = ITodo & IApiRootDto;
export type ITodoCollectionDto = {
  items: Array<ITodoDto>,
} & IApiRootDto;

