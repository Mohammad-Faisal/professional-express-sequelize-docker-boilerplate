import { Request, Response, NextFunction } from 'express';
import { ClassConstructor, plainToInstance } from 'class-transformer';
import { validate } from 'class-validator';
import { BadRequestError } from '../utils/ApiError';

/**
 * More info: https://www.mohammadfaisal.dev/blog/request-validation-nodejs-express
 */
export default class RequestValidator {
  static validate = <T extends object>(classInstance: ClassConstructor<T>) => {
    return async (req: Request, res: Response, next: NextFunction) => {
      const convertedObject = plainToInstance(classInstance, req.body);
      await validate(convertedObject).then((errors) => {
        if (errors.length > 0) {
          let rawErrors: string[] = [];
          for (const errorItem of errors) {
            rawErrors = rawErrors.concat(...rawErrors, Object.values(errorItem.constraints ?? []));
          }
          const validationErrorText = 'Request validation failed!';
          console.log('error found!', rawErrors);
          next(new BadRequestError(validationErrorText, rawErrors));
        }
      });
      next();
    };
  };
}
