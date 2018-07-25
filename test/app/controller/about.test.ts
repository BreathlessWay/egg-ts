import * as assert from 'assert';
import * as cheerio from 'cheerio';
import { app } from 'egg-mock/bootstrap';

describe('get /about page', () => {
  it('should get about page', async () => {
    const {text} = await app.httpRequest().get('/about').expect(200);
    const $ = cheerio.load(text);
    assert($('title').text());
  });
});
