import { Request } from 'express';

export const getHref = (req: Request, route: string): string =>
  `${req.protocol}://${req.headers.host}${route}`;
