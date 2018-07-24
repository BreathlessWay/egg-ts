import * as moment from 'moment';

moment.locale('zh-cn'); // 使用中文

export default {
  formatTime: (time: Date) => moment(new Date(time)).format('YYYY年MM月DD日'),
  formatTab: (name: string, good: boolean, top: boolean) => {
    if (top) {
      return '置顶';
    }
    if (good) {
      return '精华';
    }
    switch (name) {
      case 'share':
        return '分享';
      case 'job':
        return '招聘';
      case 'good':
        return '精华';
      case 'ask':
        return '问答';
      case 'dev':
        return '测试';
    }
  }
};
