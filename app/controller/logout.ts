import BaseController from './base';

export default class LogoutController extends BaseController {
  async index () {
    this.user = null;
    this.ctx.status = 200;
    this.ctx.body = {
      success: true,
      data: null
    };
    this.ctx.flash = {
      type: 'success',
      msg: '退出成功'
    };
  }
}
