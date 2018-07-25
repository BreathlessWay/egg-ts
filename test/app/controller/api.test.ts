import * as assert from 'assert';
import * as cheerio from 'cheerio';
import { app } from 'egg-mock/bootstrap';

describe('get /api page', () => {
  it('should get api page', async () => {
    const {text} = await app.httpRequest().get('/api').expect(200);
    const $ = cheerio.load(text);
    assert($('title').text());
  });
});
