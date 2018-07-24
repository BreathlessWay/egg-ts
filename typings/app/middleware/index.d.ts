// This file was auto created by egg-ts-helper
// Do not modify this file!!!!!!!!!

import Compress from '../../../app/middleware/compress';
import ErrorHandler from '../../../app/middleware/error_handler';
import ErrorPage from '../../../app/middleware/error_page';
import IsLogin from '../../../app/middleware/isLogin';
import IsNotLogin from '../../../app/middleware/isNotLogin';

declare module 'egg' {
  interface IMiddleware {
    compress: typeof Compress;
    errorHandler: typeof ErrorHandler;
    errorPage: typeof ErrorPage;
    isLogin: typeof IsLogin;
    isNotLogin: typeof IsNotLogin;
  }
}
