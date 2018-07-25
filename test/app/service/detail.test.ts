import * as assert from 'assert';
import { app, mock } from 'egg-mock/bootstrap';

describe('detail service test', () => {
  it('should get article detail', async () => {
    const ctx = app.mockContext();
    const res = await ctx.service.detail.getDetail('5a9661ff71327bb413bbff5b');
    assert(res);
  });
  it('should get article detail fail', async () => {
    mock(app.config.news, 'serverUrl', '');
    const ctx = app.mockContext();
    const res = await ctx.service.detail.getDetail('5a9661ff71327bb413bbff5b');
    assert(res === null);
  });
  it('should get article detail throw error', async () => {
    const {serverUrl} = app.config.news;
    app.mockHttpclient(`${serverUrl}/topic/5a9661ff71327bb413bbff5b`, {
      data: {
        success: false,
        error_msg: '单元测试'
      }
    });
    const ctx = app.mockContext();
    const res = await ctx.service.detail.getDetail('5a9661ff71327bb413bbff5b');
    assert(res === null);
  });
});
