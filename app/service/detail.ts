import { Service } from 'egg';

export default class DetailService extends Service {
  async getDetail (id: string): Promise<object | null> {
    // read config
    const {serverUrl} = this.config.news;
    // use build-in http client to GET hacker-news api
    try {
      const {data: detail} = await this.ctx.curl(`${serverUrl}/topic/${id}`, {
        method: 'GET',
        dataType: 'json'
      });
      if (!detail.success) {
        throw new Error(`列表接口请求失败，请求地址：${serverUrl}/topic/${id}，请求时间${new Date()}，错误原因：${detail.error_msg}`);
      }
      return detail.data;
    } catch (err) {
      this.logger.error(err);
      return null;
    }
  }
}
