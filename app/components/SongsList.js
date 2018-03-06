// @flow
import React, { Component } from 'react';
import idx from 'idx';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import type { Songs } from '../types';
import { songDuration, totalDuration } from '../utils/durations';


const ListHeader = styled.h3`

`;
type Props = {
    songs: Array<Songs>
};

export default class SongsList extends Component<Props> {
  props: Props;
  render() {
    return (
      <ListHeader>
        {`List of songs (${idx(this.props, _ => _.songs.length)} songs - approx ${totalDuration(idx(this.props, _ => _.songs))})`}
      </ListHeader>
    );
  }
}
