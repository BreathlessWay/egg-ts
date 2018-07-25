import * as assert from 'assert';
import { app } from 'egg-mock/bootstrap';

describe('logout controller success', () => {
  it('should logout success', async () => {
    app.mockSession({
      user: {}
    });
    const {text} = await app.httpRequest().get('/logout').expect(200);
    assert(JSON.parse(text).success);
  });
  it('should not logout and redirect', async () => {
    const {text} = await app.httpRequest().get('/logout').expect(302);
    assert(text.includes('Redirecting'));
  });
});
