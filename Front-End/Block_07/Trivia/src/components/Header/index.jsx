import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import md5 from 'crypto-js/md5';

import { createNewPlayer } from '../../services/localStorage';

import styles from './style.module.css';

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hash: '',
    };
  }

  componentDidMount() {
    this.hashGenerate();
  }

  componentDidUpdate() {
    this.savePlayer();
  }

  hashGenerate = () => {
    const { email } = this.props;
    const hash = md5(email).toString();
    this.setState({
      hash,
    });
  };

  savePlayer = () => {
    const { name, score } = this.props;
    const { hash } = this.state;

    createNewPlayer({
      name,
      score,
      picture: `https://www.gravatar.com/avatar/${hash}`,
    });
  }

  render() {
    const { hash } = this.state;
    const { name, score } = this.props;

    return (
      <header className={ styles.headerContainer }>
        <img
          src={ `https://www.gravatar.com/avatar/${hash}` }
          data-testid="header-profile-picture"
          alt={ name }
        />
        <p data-testid="header-player-name" className={ styles.userName }>{name}</p>
        <p data-testid="header-score">{ score }</p>
      </header>
    );
  }
}

Header.propTypes = {
  email: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  score: PropTypes.number.isRequired,
};

const mapStateToProps = (state) => ({
  email: state.player.gravatarEmail,
  name: state.player.name,
  assertions: state.player.assertions,
  score: state.player.score,
});

export default connect(mapStateToProps)(Header);
