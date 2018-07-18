import * as moment from 'moment';

export default {
  relativeTime: (time: Date) => moment(new Date(time)).fromNow()
};
