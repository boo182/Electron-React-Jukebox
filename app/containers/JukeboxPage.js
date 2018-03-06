// @flow
import React, { Component } from 'react';
import SongsList from '../components/SongsList';
import JukeboxHeader from '../components/JukeboxHeader';

import { connect } from 'react-redux';


type Props = {
};
class JukeboxPage extends Component<Props> {
  props: Props;

  render() {
    // console.log(this.props.songs);
    return (
      <div style={{ margin: 20 }}>
        <JukeboxHeader />
        <SongsList songs={this.props.songs} />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    loading: state.home.loading,
    songs: state.home.songs,
  };
}

function mapDispatchToProps(dispatch) {
  return {
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(JukeboxPage);
