import { Request, Response, NextFunction } from 'express';
import { SuccessResponse } from './SuccessResponse';

type AsyncFunction = (req: Request, res: Response, next: NextFunction) => Promise<any>;

export const asyncWrapper = (handler: AsyncFunction) => (req: Request, res: Response, next: NextFunction) => {
  Promise.resolve(handler(req, res, next))
    .then((response: SuccessResponse) =>
      res.status(response.statusCode).send({
        data: response.data,
      }),
    )
    .catch((err) => next(err));
};
