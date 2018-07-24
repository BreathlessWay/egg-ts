import { Context, Service } from 'egg';

export default class NewsService extends Service {
  constructor (ctx: Context) {
    super(ctx);
  }

  async list ({tab, page}: { tab: string, page: number }): Promise<Item[] | null> {
    try {
      // read config
      const {serverUrl, limit} = this.config.news;
      // use build-in http client to GET hacker-news api
      const {data: idList} = await this.ctx.curl(`${serverUrl}/topics`, {
        data: {
          page,
          tab,
          limit
        },
        method: 'GET',
        dataType: 'json'
      });
      if (!idList.success) {
        throw new Error(`列表接口请求失败，请求地址：${serverUrl}/topics，请求参数：{page:${page},tab:${tab},limit:${limit}}，请求时间${new Date()}，错误原因：${idList.error_msg}`);
      }
      return idList.data;
    } catch (err) {
      this.logger.error(err);
      return null;
    }
  }
}

export interface Item {
  [ key: string ]: any;
}
