// @flow
import React, { Component } from 'react';
import { connect } from 'react-redux';
import SongsList from '../components/SongsList';
import JukeboxHeader from '../components/JukeboxHeader';
import type { Songs } from '../types';
import Player from '../components/Player';


type Props = {
  songs: Array<Songs>
  // currentSong: Songs,
  // nextSong: Songs
};
class JukeboxPage extends Component<Props> {
  props: Props;

  render() {
    // console.log(this.props.songs);
    return (
      <div style={{ margin: 20 }}>
        <JukeboxHeader />
        <Player song={this.props.songs[0]} nextSong={this.props.songs[1]} />
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
