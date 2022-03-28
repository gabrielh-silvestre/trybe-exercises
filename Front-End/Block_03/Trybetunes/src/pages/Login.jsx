import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { createUser } from '../services/userAPI';
import LoadingComponent from '../components/LoadingComponent';

export default class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      hasError: true,
      userName: '',
      loading: false,
    };

    this.validUserName = this.validUserName.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentWillUnmount() {
    this.setState({ loading: false });
  }

  handleChange(event) {
    this.validUserName(event);
    this.setState({ userName: event.target.value });
  }

  async handleSubmit(event) {
    event.preventDefault();
    const { history } = this.props;
    const { userName } = this.state;

    this.setState({ loading: true }, async () => {
      await createUser({ name: userName });
      history.push('/search');
    });
  }

  validUserName({ target: { value } }) {
    const minUserNameLength = 3;

    if (value.length < minUserNameLength) this.setState({ hasError: true });
    else this.setState({ hasError: false });
  }

  render() {
    const { hasError, loading } = this.state;
    return loading ? (
      <LoadingComponent />
    ) : (
      <div data-testid="page-login">
        <form>
          <label htmlFor="userName">
            Nome de usuário:
            <input
              type="text"
              name="userName"
              id="userName"
              onChange={ this.handleChange }
              data-testid="login-name-input"
            />
          </label>

          <button
            type="submit"
            disabled={ hasError }
            onClick={ this.handleSubmit }
            data-testid="login-submit-button"
          >
            Entrar
          </button>
        </form>
      </div>
    );
  }
}

Login.propTypes = {
  history: PropTypes.instanceOf(Object).isRequired,
};
