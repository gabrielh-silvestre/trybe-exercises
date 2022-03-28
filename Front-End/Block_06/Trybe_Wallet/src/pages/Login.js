import React, { Component } from 'react';
import PropTypes from 'prop-types';

import LoginForm from '../components/LoginForm';

export default class Login extends Component {
  render() {
    const { history } = this.props;

    return (
      <LoginForm history={ history } />
    );
  }
}

Login.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
};
