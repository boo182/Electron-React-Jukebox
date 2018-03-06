import moment from 'moment';

export const songDuration = (song) => {
  const ms = moment.duration(song.duration).asMilliseconds();
  return moment(ms).format('mm:ss');
};

export const totalDuration = (songs) => {
    const allSongsDuration = songs.map(item => moment.duration(item.duration, 'milliseconds'));
    const total = allSongsDuration.reduce((a, b) => a + b);
    console.log(moment.duration(total, 'milliseconds').humanize())
    const finale = moment('2000-01-01 00:00:00').add(moment.duration(total)).format('HH:mm:ss');
    return moment.duration(finale).humanize();
}

