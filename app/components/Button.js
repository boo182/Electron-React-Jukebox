// @flow
import React, { Component } from 'react';
import styled from 'styled-components';

const MyButton = styled.button`
  background-color: transparent;
  border: none;
  decoration: none;
`;

const buttonStyle = (isFocused) => ({
  color: isFocused ? 'white' : 'lightgrey',
  decoration: 'none',
  border: 'none',
  outline: 'inherit',
  cursor: 'pointer',
});

type Props = {
    icon: string,
    onClick: () => void
};

export default class Button extends Component<Props> {
  props: Props;
  state = {
    isFocused: false,
  }

  mouseOver = () => {
    this.setState({ isFocused: !this.state.isFocused });
  };

  onClick = () => {
    this.props.onClick();
  }

  render() {
    return (
      <div>
        <MyButton
          className={this.props.icon}
          style={buttonStyle(this.state.isFocused)}
          onClick={this.onClick}
          onMouseOver={() => this.mouseOver()}
          onFocus={this.onFocus}
          onMouseOut={() => this.mouseOver()}
          onBlur={this.onBlur}
        />
      </div>
    );
  }
}
