import { call, put } from 'redux-saga/effects';
import apiFetch from '../utils/apiFetch';
import { requestSuccess } from '../actions/home';

export function * initSongsFetch(action) {
  const songs = yield call(apiFetch, ['http://localhost:5000/songs/allSongs']);
  if (songs) {
    yield put(requestSuccess(songs))
  }
}
