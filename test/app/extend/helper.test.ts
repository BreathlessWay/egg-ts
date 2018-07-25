import * as assert from 'assert';
import { app } from 'egg-mock/bootstrap';

describe('helper utils test', () => {
  it('should get yyyy年mm月dd日 time', () => {
    const ctx = app.mockContext();
    assert(ctx.helper.formatTime('2018-07-24') === '2018年07月24日');
  });
  it('should get right tab', () => {
    const ctx = app.mockContext();
    assert(ctx.helper.formatTab('share') === '分享');
    assert(ctx.helper.formatTab('job') === '招聘');
    assert(ctx.helper.formatTab('good') === '精华');
    assert(ctx.helper.formatTab('dev') === '测试');
    assert(ctx.helper.formatTab('ask') === '问答');
    assert(ctx.helper.formatTab('ask', true) === '精华');
    assert(ctx.helper.formatTab('ask', true, true) === '置顶');
  });
});
