// @flow
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Button from './Button';
import Player from '../components/Player';
import type { Playlist } from '../types';

const Header = styled.div`
  display: flex;
  flex: 1 1 70%;
  flex-direction: row;
  justify-content: space-between;
`;

type Props = {
  playlist: Playlist
};

export default class Jukebox extends Component<Props> {
  props: Props;

  state = {
    song: 0,
    nextSong: 1,
    previousSong: -1
  };

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
    const { playlist } = this.props;
    const { song, nextSong, previousSong } = this.state;
    return (
      <Header>
        <div data-tid="backButton">
          <Link to="/">
            <i className="fa fa-arrow-left fa-2x" />
          </Link>
        </div>
        {playlist ?
          <Player
            song={playlist[song]}
            nextSong={playlist[nextSong]}
            previousSong={playlist[previousSong]}
            getNextSong={this.getNextSong}
            getPreviousSong={this.getPreviousSong}
          />
        : null}
        <Button icon="fa fa-cog fa-2x" onClick={() => console.log('yooooooo')} />
      </Header>
    );
  }
}
