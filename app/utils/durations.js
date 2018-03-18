import moment from 'moment';

export const songDuration = (duration) => {
  const ms = moment.duration(duration).asMilliseconds();
  return moment(ms).format('mm:ss');
};

export const totalDuration = (songs) => {
  const allSongsDuration = songs.map(item => moment.duration(item.duration, 'milliseconds'));
  const total = allSongsDuration.reduce((a, b) => a + b);
  const finale = moment('2000-01-01 00:00:00').add(moment.duration(total)).format('HH:mm:ss');
  return moment.duration(finale).humanize();
};

