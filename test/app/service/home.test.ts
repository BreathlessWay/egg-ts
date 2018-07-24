import * as assert from 'assert';
import { app } from 'egg-mock/bootstrap';

describe('home service test', () => {
  it('should get article list 15 count', async () => {
    const ctx = app.mockContext();
    const res = await ctx.service.home.list({tab: 'all', page: 1});
    assert(res.length === app.config.news.limit);
  });
});
