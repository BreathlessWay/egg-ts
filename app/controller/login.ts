import BaseController from './base';

export default class LoginController extends BaseController {
  async index () {
    const assesstoken = this.ctx.request.body.accesstoken;
    const res = await this.ctx.service.login.login(assesstoken);
    if (res) {
      this.user = res;
      this.ctx.status = 200;
      this.ctx.body = {
        success: true,
        data: res
      };
    } else {
      this.ctx.status = 400;
      this.ctx.body = {
        success: false,
        error: '登录失败'
      };
    }
  }
}
