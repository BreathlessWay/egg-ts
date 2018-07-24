// This file was auto created by egg-ts-helper
// Do not modify this file!!!!!!!!!

import About from '../../../app/controller/about';
import Api from '../../../app/controller/api';
import Base from '../../../app/controller/base';
import Detail from '../../../app/controller/detail';
import Home from '../../../app/controller/home';
import Login from '../../../app/controller/login';
import Logout from '../../../app/controller/logout';

declare module 'egg' {
  interface IController {
    about: About;
    api: Api;
    base: Base;
    detail: Detail;
    home: Home;
    login: Login;
    logout: Logout;
  }
}
