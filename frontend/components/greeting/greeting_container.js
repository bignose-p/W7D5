import React from 'react';
import {connect} from 'react-redux';
import Greeting from './greeting';

const mapStateToProps = (state) => {
  return {session: state.session}
};

const mapDispatchToProps = (dispatch) => {
  return {
    logout: () => dispatch(logout())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Greeting);
