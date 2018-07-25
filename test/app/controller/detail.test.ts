import * as assert from 'assert';
import { app } from 'egg-mock/bootstrap';

describe('detail controller test', () => {
  it('should get /detail page', async () => {
    const res = await app.httpRequest().get('/detail/5a9661ff71327bb413bbff5b').expect(200);
    assert.ok(res);
  });
  it('should not get /detail page when service error', async () => {
    app.mockService('detail', 'getDetail', () => {
      return null;
    });
    await app.httpRequest().get('/detail/5a9661ff71327bb413bbff5b').expect(404);
  });
  describe('should not get /detail page without id', () => {
    it('should not get /detail page and get 404 error', async () => {
      await app.httpRequest().get('/detail').expect(404);
      app.mockService('detail', 'getDetail', () => {
        return null;
      });
      await app.httpRequest().get('/detail/5a9661ff71327bb413bbff5b').expect(404);
    });
  });
});
