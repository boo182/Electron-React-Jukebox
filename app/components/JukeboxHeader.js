// @flow
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Button from './Button';


const Header = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

type Props = {};

export default class Jukebox extends Component<Props> {
  props: Props;

  render() {
    return (
      <Header>
        <div data-tid="backButton">
          <Link to="/">
            <i className="fa fa-arrow-left fa-2x" />
          </Link>
        </div>
        <Button icon="fa fa-cog fa-2x" onClick={() => console.log('yooooooo')} />
      </Header>
    );
  }
}
