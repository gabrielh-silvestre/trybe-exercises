import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import Input from '../Input';
import { loginUser } from '../../actions';

const MIN_PASSWORD_LENGHT = 6;
const EMAIL_REGEX = /[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/gm;

class LoginForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: '',
      hasError: true,
    };
  }

  checkError = () => {
    const { email, password } = this.state;

    this.setState({
      hasError: !(
        EMAIL_REGEX.test(email) && password.length >= MIN_PASSWORD_LENGHT
      ),
    });
  };

  handleChange = ({ target: { name, value } }) => {
    this.setState({ [name]: value }, this.checkError);
  };

  handleLogin = () => {
    const { history, login } = this.props;
    const { email } = this.state;

    login(email);

    this.setState(
      {
        email: '',
        password: '',
        hasError: true,
      },
      () => {
        history.push('/carteira');
      },
    );
  };

  render() {
    const { email, password, hasError } = this.state;

    return (
      <div>
        <Input
          type="email"
          name="email"
          value={ email }
          testId="email-input"
          onChange={ this.handleChange }
        />

        <Input
          type="password"
          name="password"
          value={ password }
          testId="password-input"
          onChange={ this.handleChange }
        />

        <button type="button" disabled={ hasError } onClick={ this.handleLogin }>
          Entrar
        </button>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  login: (email) => dispatch(loginUser(email)),
});

export default connect(null, mapDispatchToProps)(LoginForm);

LoginForm.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
  login: PropTypes.func.isRequired,
};
