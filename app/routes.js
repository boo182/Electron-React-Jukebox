/* eslint flowtype-errors/show-errors: 0 */
import React from 'react';
import { Switch, Route } from 'react-router';
import App from './containers/App';
import HomePage from './containers/HomePage';
import JukeboxPage from './containers/JukeboxPage';

export default () => (
  <App>
    <Switch>
      <Route path="/jukebox" component={JukeboxPage} />
      <Route path="/" component={HomePage} />
    </Switch>
  </App>
);
