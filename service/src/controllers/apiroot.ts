import { Router, Request, Response } from 'express';
import { IApiRootDto } from '../models/apiroot';
import {
  Routes as TodoRoutes,
  RelMap as TodoRelMap,
} from './todo';
import { getHref } from '../utils';
import { Methods } from '../enums';

const router: Router = Router();

export enum Routes {
  Base = '/',
}

export enum RelMap {
  Self = 'self',
  ApiRoot = 'apiroot'
}

router.get(Routes.Base, (req: Request, res: Response) => {
  const href = getHref(req, Routes.Base);
  const dto: IApiRootDto = {
    href,
    links: [{
      rel: RelMap.ApiRoot,
      href: getHref(req, Routes.Base),
      methods: [Methods.Get],
    }, {
      rel: TodoRelMap.TodoCollection,
      href: getHref(req, `${TodoRoutes.Base}${TodoRoutes.TodoCollection}`),
      methods: [Methods.Get],
    }, {
      rel: TodoRelMap.Todo,
      href: getHref(req, `${TodoRoutes.Base}${TodoRoutes.Todo}`),
      methods: [Methods.Get],
    }],
  };
  res.json(dto);
});

export default router;

