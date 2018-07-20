import * as assert from 'assert';
import { app } from 'egg-mock/bootstrap';

describe('test/app/controller/home.test.ts', () => {
  it('should GET /', async () => {
    const result = await app.httpRequest().get('/').expect(200);
    assert(result.text.includes('script'));
  });

  describe('GET /', () => {
    it('should status 200 and get the body', () => {
      // 对 app 发起 `GET /` 请求
      return app.httpRequest()
                .get('/')
                .expect(200); // 期望返回 status 200
    });

    it('should send multi requests', async () => {
      // 使用 generator function 方式写测试用例，可以在一个用例中串行发起多次请求
      await app.httpRequest()
               .get('/')
               .expect(200); // 期望返回 status 200

      // 再请求一次
      const result = await app.httpRequest()
                              .get('/')
                              .expect(200);

      // 也可以这样验证
      assert(result.status === 200);
    });
  });
});
