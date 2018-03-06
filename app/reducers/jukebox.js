// @flow

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


    default:
      return state;
  }
}
