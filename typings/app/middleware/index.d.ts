// This file was auto created by egg-ts-helper
// Do not modify this file!!!!!!!!!

import Compress from '../../../app/middleware/compress';
import ErrorHandler from '../../../app/middleware/error_handler';
import ErrorPage from '../../../app/middleware/error_page';

declare module 'egg' {
  interface IMiddleware {
    compress: typeof Compress;
    errorHandler: typeof ErrorHandler;
    errorPage: typeof ErrorPage;
  }
}
