// @flow
import { combineReducers } from 'redux';
import { routerReducer as router } from 'react-router-redux';
import jukebox from './jukebox';


const rootReducer = combineReducers({
  router,
  jukebox,
});

export default rootReducer;
