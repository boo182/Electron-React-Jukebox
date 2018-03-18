// @flow
import React, { Component } from 'react';
import styled from 'styled-components';
import type { Songs } from '../types';
import Button from './Button';
import PlayingSong from './PlayingSong';
import { songDuration } from '../utils/durations';

const PlayerWrapper = styled.div`
  border: 1px solid white;
  padding-right: 20px;
  padding-left: 20px;
`;
const SongTitle = styled.div`
  margin-right: 40px;
  margin-left: 40px;
`;

const TitleWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  flex: 1;
  align-items: center;  
  `;
type Props = {
    song: Songs,
    nextSong: Songs,
    previousSong: Songs,
    getNextSong: () => void,
    getPreviousSong: () => void
};

export default class Player extends Component<Props> {
  props: Props;
  render() {
    const { song, nextSong, previousSong, getNextSong, getPreviousSong } = this.props;
    if (!song) {
      return <div>No Song</div>;
    }
    return (
      <PlayerWrapper>
        <TitleWrapper>
          <Button icon="fa fa-arrow-circle-left fa-2x" onClick={getPreviousSong} />
          <SongTitle>{song.title} - {songDuration(song.duration)}</SongTitle>
          <Button icon="fa fa-arrow-circle-right fa-2x" onClick={getNextSong} />
        </TitleWrapper>
        <PlayingSong song={song} />
      </PlayerWrapper>
    );
  }
}
