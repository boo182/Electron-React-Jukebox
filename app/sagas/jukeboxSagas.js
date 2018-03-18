import { call, put } from 'redux-saga/effects';
import apiFetch from '../utils/apiFetch';
import { playlistRequestSuccess, songRequestSucces } from '../actions/jukebox';

export function * currentPlaylistFetch() {
  const playlist = yield call(apiFetch, ['http://localhost:5000/playlists/current']);
  if (playlist) {
    yield put(playlistRequestSuccess(playlist));
  }
}

export function * songFetch(action) {
  const playlist = yield call(apiFetch, ['http://localhost:5000/playlists/add'], {
    headers: {
      'Accept': 'application/json, text/plain, */*',
      'Content-Type': 'application/json'
    },
    method: 'POST',
    body: JSON.stringify({
      song: action.payload.url,
      songPosition: 18,
    }),
  });
  console.log(playlist);
  if (playlist) {
    yield put(songRequestSucces(playlist));
  }
}
