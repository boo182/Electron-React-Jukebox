// @flow
import React, { Component } from 'react';
import idx from 'idx';
import styled from 'styled-components';
import type { Songs } from '../types';
import { totalDuration } from '../utils/durations';
import SongItem from './SongItem';
import NewSongInput from './NewSongInput';

const ListHeader = styled.h3`
`;
const TitleContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;
type Props = {
    songs: Array<Songs>,
    getSong: (url: string) => void
};

export default class SongsList extends Component<Props> {
  props: Props;

  render() {
    const { songs, getSong } = this.props;
    console.log(songs);
    if (songs.length < 1) { // TODO Make a compoenent of empty List
      return (<ListHeader>No songs in the list</ListHeader>);
    }
    return (
      <div>
        <TitleContainer>
          <ListHeader>
            {`List of songs (${idx(this.props, _ => _.songs.length)} songs 
              - approx ${totalDuration(idx(this.props, _ => _.songs))})`}
          </ListHeader>
          <NewSongInput getSong={getSong} />
        </TitleContainer>
        <div>
          {this.props.songs.map(item =>
            <SongItem song={item} key={`index-${item.songId}`} />)}
        </div>
      </div>

    );
  }
}
