import { Service } from 'egg';

export default class LoginService extends Service {
  async login (accesstoken: string): Promise<any> {
    try {
      const {serverUrl} = this.config.news;
      const {data: userInfo} = await this.ctx.curl(`${serverUrl}/accesstoken`, {
        data: {
          accesstoken
        },
        method: 'POST',
        dataType: 'json'
      });
      if (!userInfo.success) {
        throw new Error(`登录接口请求失败，请求地址：${serverUrl}/accesstoken，请求参数：{accesstoken:${accesstoken}}，请求时间${new Date()}，错误原因：${userInfo.error_msg}`);
      }
      return userInfo;
    } catch (err) {
      this.logger.error(err);
      return null;
    }
  }
}
