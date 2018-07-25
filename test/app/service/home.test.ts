import * as assert from 'assert';
import { app, mock } from 'egg-mock/bootstrap';

describe('home service test', () => {
  it('should get article list 15 count', async () => {
    const ctx = app.mockContext();
    const res = await ctx.service.home.list({tab: 'all', page: 1});
    assert(res.length === app.config.news.limit);
  });
  it('should get article list error', async () => {
    mock(app.config.news, 'serverUrl', '');
    const ctx = app.mockContext();
    const res = await ctx.service.home.list({tab: 'all', page: 1});
    assert(res === null);
  });
  it('should get article list throw error', async () => {
    const {serverUrl} = app.config.news;
    app.mockHttpclient(`${serverUrl}/topics`, {
      data: {
        success: false,
        error_msg: '单元测试'
      }
    });
    const ctx = app.mockContext();
    const res = await ctx.service.home.list({tab: 'all', page: 1});
    assert(res === null);
  });
});
