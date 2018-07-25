import * as assert from 'assert';
import { app } from 'egg-mock/bootstrap';

describe('error_page middleware test', () => {
  it('should get 404 page', async () => {
    const {text} = await app.httpRequest().get('/404').expect(404);
    assert(text);
  });
});
