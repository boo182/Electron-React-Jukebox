// @flow
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styles from './Home.css';

export default class Home extends Component<Props> {
  props: Props;

  render() {
    return (
      <div>
        <div className={styles.container} data-tid="container">
          <h2>Jukebox</h2>
          <Link to="/jukebox">Start Now</Link>
        </div>
      </div>
    );
  }
}
