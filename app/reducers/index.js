// @flow
import { combineReducers } from 'redux';
import { routerReducer as router } from 'react-router-redux';
import home from './home';
import jukebox from './jukebox';


const rootReducer = combineReducers({
  router,
  home,
  jukebox,
});

export default rootReducer;
