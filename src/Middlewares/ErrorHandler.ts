import { NextFunction, Request, Response } from 'express';
import ErrorMap from '../utils/ErrorMap';

class ErrorHandler {
  public static handle(
    error: Error & Partial<ErrorMap>,
    _req: Request,
    res: Response,
    next: NextFunction,
  ) {
    res.status(error._statusCode || 500).json({ message: error.message || 'Internal Error' });
    next();
  }
}

export default ErrorHandler;