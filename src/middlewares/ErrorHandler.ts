import { Request, Response, NextFunction } from 'express';
import { ApiError } from '../utils/ApiError';
/**
 * More Information: https://www.mohammadfaisal.dev/blog/error-handling-nodejs-express
 */
export default class ErrorHandler {
  static handle = () => {
    return async (err: ApiError, req: Request, res: Response, next: NextFunction) => {
      const statusCode = err.statusCode || 500;
      console.log('error occurred: ', err.toString(), statusCode);
      res.status(statusCode).send({
        success: false,
        message: err.message,
        rawErrors: err.rawErrors ?? [],
        stack: err.stack,
      });
    };
  };

  static initializeUnhandledException = () => {
    process.on('unhandledRejection', (reason: Error, promise: Promise<any>) => {
      console.log(reason.name, reason.message);
      console.log('UNHANDLED REJECTION! 💥 Shutting down...');
      throw reason;
    });

    process.on('uncaughtException', (err: Error) => {
      console.log(err.name, err.message);
      console.log('UNCAUGHT EXCEPTION! 💥 Shutting down...');
      process.exit(1);
    });
  };
}
