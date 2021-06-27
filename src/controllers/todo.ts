import { Router, Request, Response } from 'express';

const router: Router = Router();

router.get('/', (req: Request, res: Response) => {
  res.send('some todo list');
});

router .get('/:id', (req: Request, res: Response) => {
  res.send('some unique todo item');
});

export default router;
