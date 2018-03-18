// @flow
import {
  PLAYLIST_REQUEST,
  PLAYLIST_REQUEST_SUCCESS,
  SONG_REQUEST,
  SONG_REQUEST_SUCCESS
} from '../actions/jukebox';

type actionType = {
  +type: string,
  +payload: object
};

const initialState = {
  playlist: [],
  loading: false,
  playlistLoading: [],
};
export default function home(state = initialState, action: actionType) {
  switch (action.type) {
    case PLAYLIST_REQUEST:
      return Object.assign({}, state, { loading: true });
    case SONG_REQUEST:
      return Object.assign({}, state, { playlistLoading: true });
    case PLAYLIST_REQUEST_SUCCESS:
      return Object.assign({}, state, { loading: false, playlist: action.payload.playlist });
    case SONG_REQUEST_SUCCESS:
      return Object.assign({}, state, { playlistLoading: false, playlist: action.payload.playlist });
    default:
      return state;
  }
}
