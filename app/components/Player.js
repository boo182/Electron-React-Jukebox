// @flow
import React, { Component } from 'react';
import styled from 'styled-components';
import type { Songs } from '../types';
import Button from './Button';
import PlayingSong from './PlayingSong';


const PlayerWrapper = styled.div`
  margin-top: 30px;
  border: 1px solid white;
`;
const SongTitle = styled.div`
`;
const TitleWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;  
  `;
type Props = {
    song: Songs,
    nextSong: Songs
};

export default class Player extends Component<Props> {
  props: Props;
  render() {
    const { title, duration } = this.props.song;
    if (!this.props.song) {
      return <div>No Song</div>;
    }
    return (
      <PlayerWrapper>
        <TitleWrapper>
          <Button icon="fa fa-arrow-circle-left fa-2x" onClick={() => console.log('yooooooo')} />
          <SongTitle>{title} - {duration}</SongTitle>
          <Button icon="fa fa-arrow-circle-right fa-2x" onClick={() => console.log('yooooooo')} />
        </TitleWrapper>
        <PlayingSong song={this.props.song} />
      </PlayerWrapper>
    );
  }
}
