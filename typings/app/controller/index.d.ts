// This file was auto created by egg-ts-helper
// Do not modify this file!!!!!!!!!

import About from '../../../app/controller/about';
import Api from '../../../app/controller/api';
import Base from '../../../app/controller/base';
import Home from '../../../app/controller/home';

declare module 'egg' {
  interface IController {
    about: About;
    api: Api;
    base: Base;
    home: Home;
  }
}
