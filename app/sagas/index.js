import { takeLatest, all } from 'redux-saga/effects';
/* ------------- Types ------------- */
import { PLAYLIST_REQUEST, SONG_REQUEST } from '../actions/jukebox';

/* ------------- Sagas ------------- */
import { currentPlaylistFetch, songFetch } from './jukeboxSagas';

/* ------------- Connect Types To Sagas ------------- */

export default function * mySaga() {
  yield all([
    takeLatest(PLAYLIST_REQUEST, currentPlaylistFetch),
    takeLatest(SONG_REQUEST, songFetch),
  ]);
}
