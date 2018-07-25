import * as assert from 'assert';
import * as cheerio from 'cheerio';
import { app } from 'egg-mock/bootstrap';

describe('home controller test', () => {
  it('should get / with status 200 and no pre page btn', async () => {
    const content = await app.httpRequest().get('/').expect(200);
    const $ = cheerio.load(content.text);
    assert($('.cnode-home_articles').length === app.config.news.limit);
    assert($('.cnode-home-page_pre').length === 0);
  });
  it('should show login btn', async () => {
    const content = await app.httpRequest().get('/').expect(200);
    const $ = cheerio.load(content.text);
    assert($('a[data-target="#login"]').length === 1);
    assert($('.logout-btn').length === 0);
  });
  it('should not show login btn', async () => {
    app.mockSession({
      user: {}
    });
    const content = await app.httpRequest().get('/').expect(200);
    const $ = cheerio.load(content.text);
    assert($('a[data-target="#login"]').length === 0);
    assert($('.logout-btn').length === 1);
  });
  it('should get 404 error', async () => {
    app.mockService('home', 'list', () => {
      return null;
    });
    await app.httpRequest().get('/').expect(404);
  });
});
