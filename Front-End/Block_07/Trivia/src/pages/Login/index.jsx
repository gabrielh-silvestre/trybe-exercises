import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { signUpUser, saveToken, resetGame } from '../../redux/actions';

import Input from '../../components/Input';

import logo from '../../trivia.png';
import styles from './login.module.css';
import '../../index.css';

const INITIAL_STATE = {
  name: '',
  gravatarEmail: '',
  hasError: true,
};

export class Login extends Component {
  constructor(props) {
    super(props);

    this.state = INITIAL_STATE;
  }

  componentDidMount() {
    const { gameReset } = this.props;

    gameReset();
  }

  handleChange = ({ target: { name, value } }) => {
    this.setState({
      [name]: value,
    }, this.checkError);
  };

  handleSubmit = async () => {
    const { name, gravatarEmail } = this.state;
    const { userSignUp, history, storeToken } = this.props;

    userSignUp({
      name,
      gravatarEmail,
    });
    await storeToken();

    this.setState(INITIAL_STATE, () => {
      history.push('/question/0');
    });
  };

  handleConfig = () => {
    const { history } = this.props;

    history.push('/config');
  };

  checkError = () => {
    const { name, gravatarEmail } = this.state;

    this.setState({
      hasError: name === '' || gravatarEmail === '',
    });
  };

  render() {
    const { hasError, gravatarEmail, name } = this.state;

    return (
      <div className={ styles.main }>

        <div className={ styles.imageContainer }>
          <img src={ logo } className="App-logo" alt="logo" />
        </div>

        <div className={ styles.container }>
          <form>
            <h1>Sign In</h1>
            <Input
              type="text"
              name="gravatarEmail"
              value={ gravatarEmail }
              label="Email"
              onChange={ this.handleChange }
              testId="input-gravatar-email"
              placeholder="exemplo@email.com"
            />

            <Input
              type="text"
              name="name"
              value={ name }
              label="Nome"
              onChange={ this.handleChange }
              testId="input-player-name"
              placeholder="Tryber Silva e Silva"
            />

            <div className={ styles.buttonsContainer }>
              <button
                type="button"
                disabled={ hasError }
                onClick={ this.handleSubmit }
                data-testid="btn-play"
              >
                Play
              </button>

              <button
                type="button"
                data-testid="btn-settings"
                onClick={ this.handleConfig }
              >
                Configurações
              </button>
            </div>
          </form>
        </div>

      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  userSignUp: (user) => dispatch(signUpUser(user)),
  storeToken: () => dispatch(saveToken()),
  gameReset: () => dispatch(resetGame),
});

export default connect(null, mapDispatchToProps)(Login);

Login.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func,
  }).isRequired,
  userSignUp: PropTypes.func.isRequired,
  storeToken: PropTypes.func.isRequired,
  gameReset: PropTypes.func.isRequired,
};
