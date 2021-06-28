export interface ITodoItem {
  id: number;
  title: string;
  description: string;
  createdDate: string;
  modifiedDate?: string;
}

export interface ITodoList {
  items: Array<ITodoItem>;
}

