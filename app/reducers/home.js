// @flow
import { INIT_REQUEST, REQUEST_SUCCESS } from '../actions/home';

console.log(REQUEST_SUCCESS);
type actionType = {
  +type: string,
  +payload: object
};

const initialState = {
  songs: null,
  loading: false
};
export default function home(state = initialState, action: actionType) {
  switch (action.type) {
    case INIT_REQUEST:
      return Object.assign({}, state, { loading: true });

    case REQUEST_SUCCESS:
      return Object.assign({}, state, { loading: false, songs: action.payload.songs });

    default:
      return state;
  }
}
