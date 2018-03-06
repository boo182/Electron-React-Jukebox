import { takeLatest, all } from 'redux-saga/effects';
/* ------------- Types ------------- */
import { INIT_REQUEST } from '../actions/home';

/* ------------- Sagas ------------- */
import { initSongsFetch } from './homeSagas';

/* ------------- Connect Types To Sagas ------------- */

export default function * mySaga() {
  yield all([
    takeLatest(INIT_REQUEST, initSongsFetch),
  ]);
}
