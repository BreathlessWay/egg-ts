import * as assert from 'assert';
import { app } from 'egg-mock/bootstrap';

describe('login controller test', () => {
  it('should login success', async () => {
    // 模拟 CSRF token，
    app.mockCsrf();
    const {text: data} = await app.httpRequest().post('/login').send({accesstoken: 'e111bccc-3a4b-4428-9b7c-efa257a4da0d'}).expect(200);
    assert(JSON.parse(data).success === true);
  });
  it('should redirect to home page', async () => {
    app.mockSession({
      user: {}
    });
    // 模拟 CSRF token，
    app.mockCsrf();
    const res = await app.httpRequest().post('/login').send({accesstoken: 'e111bccc-3a4b-4428-9b7c-efa257a4da0d'}).expect(302);
    assert(res.text.includes('Redirecting'));
  });
  it('should login fail', async () => {
    // 模拟 CSRF token，
    app.mockCsrf();
    const {text: data} = await app.httpRequest().post('/login').send({accesstoken: ''}).expect(400);
    assert(JSON.parse(data).success === false);
  });
});
