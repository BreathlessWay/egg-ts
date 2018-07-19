'use strict';

import * as assert from 'assert';
import { Context } from 'egg';
import { app } from 'egg-mock/bootstrap';

describe('test/app/service/news.test.js', () => {
  let ctx: Context;

  before(() => {
    ctx = app.mockContext();
  });

  it('get news list', async () => {
    const list = await ctx.service.news.list();
    assert(list.length === ctx.app.config.news.pageSize);
  });

});
