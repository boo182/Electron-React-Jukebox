// @flow
import React, { Component } from 'react';
import { connect } from 'react-redux';
import SongsList from '../components/SongsList';
import JukeboxHeader from '../components/JukeboxHeader';
import type { Playlist } from '../types';
import { playlistRequest, songRequest } from '../actions/jukebox';

type Props = {
  playlist: Playlist,
  loading: boolean,
  playlistRequest: () => void,
  getSong: (url: string) => void
};

class JukeboxPage extends Component<Props> {
  props: Props;
  state = {
    song: 0,
    nextSong: 1,
    previousSong: -1
  };

  componentWillMount() {
    this.props.playlistRequest();
  }

  getNextSong = () => {
    const { song, nextSong, previousSong } = this.state;
    if (song < this.props.playlist.length - 1) {
      this.setState({ song: song + 1, nextSong: nextSong + 1, previousSong: previousSong + 1 });
    }
  }

  getPreviousSong = () => {
    const { song, nextSong, previousSong } = this.state;
    if (song === 0) {
      this.setState({ song: 0, nextSong: 1, previousSong: 0 });
    } else {
      this.setState({ song: song - 1, nextSong: nextSong - 1, previousSong: previousSong + 1 });
    }
  }

  render() {
    const { playlist, loading, getSong } = this.props;
    return (
      <div style={{ margin: 20 }}>
        <JukeboxHeader playlist={playlist} />
        {!loading ? <SongsList songs={playlist} getSong={getSong} /> : null}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    playlist: state.jukebox.playlist,
    loading: state.jukebox.loading,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    playlistRequest: () => dispatch(playlistRequest()),
    getSong: (url) => dispatch(songRequest(url)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(JukeboxPage);
