import * as assert from 'assert';
import { app } from 'egg-mock/bootstrap';

describe('context test', () => {
  let ctx;
  // before(() => {
  //   ctx = app.mockContext(
  //     {
  //       headers: {
  //         'user-agent': 'iphone'
  //       }
  //     }
  //   );
  //   // Object.defineProperty(ctx.header, 'user-agent', {
  //   //   value: 'iphone'
  //   // });
  // });
  it('should be ios', () => {
    ctx = app.mockContext(
      {
        headers: {
          'user-agent': 'iphone'
        }
      }
    );
    assert(ctx.isIOS === true);
  });
  it('should not be ios', () => {
    ctx = app.mockContext(
      {
        headers: {
          'user-agent': 'android'
        }
      }
    );
    assert(ctx.isIOS !== true);
  });
});
