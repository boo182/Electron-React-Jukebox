// @flow
import React, { Component } from 'react';
import ReactPlayer from 'react-player';
import styled from 'styled-components';
import type { Songs } from '../types';
import Button from './Button';

type Props = {
    song: Songs
};

export default class PlayingSong extends Component<Props> {
  props: Props;
  render() {
    const { title, duration, url } = this.props.song;
    if (!this.props.song) {
      return <div>No Song</div>;
    }
    return (
      <ReactPlayer
        url={url}
        width="0px"
        height="0px"
        playing
      />
    );
  }
}
