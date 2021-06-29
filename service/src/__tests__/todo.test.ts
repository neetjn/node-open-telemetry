import App, { server } from '../app';
import { Routes } from '../controllers/todo';

const request = require('supertest');

const TodoCollectionHref = `${Routes.Base}${Routes.TodoCollection}`;
const TodoHref = `${Routes.Base}${Routes.Todo}`;

describe('todo controller', () => {
  afterAll(() => {
    server.close();
  });
  it('it should fetch a collection of todo resources', async () => {
    const { statusCode } = await request(App).get(TodoCollectionHref);
    expect(statusCode).toEqual(200);
  });
});

