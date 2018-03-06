// @flow
import React, { Component } from 'react';
import Home from '../components/Home';
import { initRequest } from '../actions/home';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

type Props = {
  initRequest: Function,
  loading: boolean
};
class HomePage extends Component<Props> {
  props: Props;
  componentWillMount() {
    this.props.initRequest();
  }
  render() {
    return (
      <Home loading={this.props.loading} />
    );
  }
}

function mapStateToProps(state) {
  return {
    loading: state.home.loading,
  };
}
function mapDispatchToProps(dispatch) {
  return {
    initRequest: () => dispatch(initRequest()),
  };
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(HomePage));
