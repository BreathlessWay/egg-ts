import { Context, Service } from 'egg';

export default class NewsService extends Service {
  constructor (ctx: Context) {
    super(ctx);
  }

  async list (page?: number): Promise<Item[]> {
    // read config
    const {serverUrl, pageSize} = this.config.news;
    // use build-in http client to GET hacker-news api
    const {data: idList} = await this.ctx.curl(`${serverUrl}/topics `, {
      data: {
        page,
        tab: '',
        limit: pageSize
      },
      method: 'GET',
      dataType: 'json'
    });

    return idList.data;
  }
}

export interface Item {
  [ key: string ]: any;
}
