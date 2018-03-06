// @flow
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styles from './Home.css';

type Props = {
  loading: boolean
};

export default class Home extends Component<Props> {
  props: Props;

  render() {
    if (this.props.loading) {
      return (<div>Loading</div>);
    }
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
