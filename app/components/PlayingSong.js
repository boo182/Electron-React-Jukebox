// @flow
import React, { Component } from 'react';
import idx from 'idx';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import type { Songs } from '../types';
import { songDuration, totalDuration } from '../utils/durations';
import SongItem from './Songitem';

const Player = styled.div`
    
`;

type Props = {
    song: Songs
};

export default class PlayingSong extends Component<Props> {
  props: Props;

  render() {
    const { song } = this.props;
    if (!song) { // TODO Make a compoenent of empty List
      return (<ListHeader>
          No songs in the list
      </ListHeader>
      );
    }
    return (
      <div>
        SONG TO BE PLAYED
      </div>

    );
  }
}
