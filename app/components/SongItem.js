// @flow
import React, { Component } from 'react';
import styled from 'styled-components';
import type { Songs } from '../types';
import { songDuration } from '../utils/durations';

const Song = styled.div`
display: flex;
flex-direction: row;
justify-content: flex-start;
margin-bottom:10px;
`;
const Title = styled.div`
    margin-right: 10px;
    font-size: 15px;
    
`;
const Duration = styled.div`
font-size: 13px;
`;
type Props = {
    song: Songs
};

export default class SongsList extends Component<Props> {
  props: Props;
  render() {
    return (
      <Song>
        <Title>{this.props.song.title}</Title>
        <Duration>{`(${songDuration(this.props.song.duration)})`}</Duration>
      </Song>

    );
  }
}
