// @flow


type actionType = {
  +type: string
};

export const INIT_REQUEST = 'INIT_REQUEST';
export const REQUEST_SUCCESS = 'REQUEST_SUCCESS';

export function initRequest() {
  return {
    type: INIT_REQUEST,
  };
}

export function requestSuccess(songs) {
  return {
    type: REQUEST_SUCCESS,
    payload: {
      songs,
    }
  };
}
