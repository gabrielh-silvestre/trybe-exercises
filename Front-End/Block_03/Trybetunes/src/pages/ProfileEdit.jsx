import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Header from '../components/Header';
import LoadingComponent from '../components/LoadingComponent';

import { getUser, updateUser } from '../services/userAPI';

export default class ProfileEdit extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: false,
      user: {},
      hasError: true,
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleErrors = this.handleErrors.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.fetchUser = this.fetchUser.bind(this);
    this.isSomeInputEmpty = this.isSomeInputEmpty.bind(this);
    this.isEmailValid = this.isEmailValid.bind(this);
  }

  componentDidMount() {
    this.fetchUser();
  }

  componentWillUnmount() {
    this.setState({ loading: false });
  }

  handleChange({ target: { name, value } }) {
    const { user } = this.state;
    user[name] = value;

    this.setState({ user }, () => {
      this.handleErrors();
    });
  }

  handleErrors() {
    const { user } = this.state;

    this.setState({
      hasError: this.isSomeInputEmpty(user) || this.isEmailValid(user),
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    const { user } = this.state;
    const { history } = this.props;

    this.setState({ loading: true }, async () => {
      await updateUser(user);
      history.push('/profile');
    });
  }

  fetchUser() {
    this.setState({ loading: true }, async () => {
      const user = await getUser();
      this.setState({ user, loading: false });
    });
  }

  isSomeInputEmpty(user) {
    return Object.values(user).some((info) => info === '');
  }

  isEmailValid({ email }) {
    const emailRegex = new RegExp(/[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/);

    return !emailRegex.test(email);
  }

  renderUserForms({ description, email, image, name }) {
    return (
      <>
        <label htmlFor="image">
          Foto de perfil:
          <input
            type="text"
            name="image"
            id="image"
            value={ image }
            onChange={ this.handleChange }
            data-testid="edit-input-image"
          />
        </label>

        <label htmlFor="name">
          Nome:
          <input
            type="text"
            name="name"
            id="name"
            value={ name }
            onChange={ this.handleChange }
            data-testid="edit-input-name"
          />
        </label>

        <label htmlFor="description">
          Descrição:
          <input
            type="text"
            name="description"
            id="description"
            value={ description }
            onChange={ this.handleChange }
            data-testid="edit-input-description"
          />
        </label>

        <label htmlFor="email">
          Email:
          <input
            type="text"
            name="email"
            id="email"
            value={ email }
            onChange={ this.handleChange }
            data-testid="edit-input-email"
          />
        </label>
      </>
    );
  }

  render() {
    const { loading, user, hasError } = this.state;

    return (
      <div data-testid="page-profile-edit">
        <Header />
        {loading ? (
          <LoadingComponent />
        ) : (
          <form onSubmit={ this.handleSubmit }>
            {this.renderUserForms(user)}
            <button
              type="submit"
              disabled={ hasError }
              data-testid="edit-button-save"
            >
              Editar perfil
            </button>
          </form>
        )}
      </div>
    );
  }
}

ProfileEdit.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
};
