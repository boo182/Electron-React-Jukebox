// @flow
import React, { Component } from 'react';
import ReactPlayer from 'react-player';
import type { Songs } from '../types';

type Props = {
    song: Songs
};

export default class PlayingSong extends Component<Props> {
  props: Props;

  render() {
    const { url } = this.props.song;
    if (!this.props.song) {
      return <div>No Song</div>;
    }
    return (
      <ReactPlayer
        url={url}
        playing
      />
    );
  }
}
