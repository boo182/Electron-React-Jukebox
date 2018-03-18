// @flow
import React, { Component } from 'react';
import styled from 'styled-components';
import Button from './Button';

const Wrapper = styled.div`
    display: flex;
    flex-direction: row;
    margin-left: 50px;
    align-items: center;
`;
const Input = styled.input`
  background-color: transparent;
  padding-left: 5px;
  padding-bottom: 4px;
  font-size: 12px;
  color: white;
  border: none;
  border-bottom: 2px solid white;
  &:focus {
    outline: none;
  }
`;
type Props = {
    getSong: (url: string) => void
};

export default class NewSongInput extends Component<Props> {
  props: Props;
  state={
    url: '',
  };

  render() {

    return (
      <Wrapper>
        <Input type="url" placeholder={"Song's url"} onChange={(e) => this.setState({ url: e.target.value })} />
        <Button icon="fa fa-search fa-1x" onClick={() => this.props.getSong(this.state.url)} />
      </Wrapper>
    );
  }
}
