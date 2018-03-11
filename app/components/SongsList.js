// @flow
import React, { Component } from 'react';
import idx from 'idx';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import type { Songs } from '../types';
import { totalDuration } from '../utils/durations';
import SongItem from './SongItem';

const ListHeader = styled.h3`
`;

type Props = {
    songs: Array<Songs>
};

export default class SongsList extends Component<Props> {
  props: Props;

  render() {
    const { songs } = this.props;
    if (!songs) { // TODO Make a compoenent of empty List
      return (<ListHeader>No songs in the list</ListHeader>);
    }
    return (
      <div>
        <ListHeader>
          {`List of songs (${idx(this.props, _ => _.songs.length)} songs 
            - approx ${totalDuration(idx(this.props, _ => _.songs))})`}
        </ListHeader>
        <div>
          {this.props.songs.map(item =>
            <SongItem song={item} key={`index-${item.id}`} />)}
        </div>
      </div>

    );
  }
}
