import React, { Component } from 'react';
import PropTypes from 'prop-types';

import styles from './styles.module.css';

class Ranking extends Component {
  constructor() {
    super();

    this.state = {
      players: [],
    };
  }

  componentDidMount() {
    this.getUserData();
  }

  getUserData = () => {
    const players = JSON.parse(localStorage.getItem('ranking'));
    const sortedArr = players.sort((a, b) => b.score - a.score);

    this.setState({ players: sortedArr });
  };

  directToLogin = () => {
    const { history } = this.props;
    history.push('/');
  };

  render() {
    const { players } = this.state;

    return (
      <main className={ styles.container }>
        <h1 data-testid="ranking-title">Ranking</h1>
        <article className={ styles.contentContainer }>
          {players.map((player, i) => (
            <div key={ i }>
              <img src={ player.picture } alt="gravatar" />
              <h2 data-testid={ `player-name-${i}` }>{player.name}</h2>
              <p data-testid={ `player-score-${i}` }>{player.score}</p>
            </div>
          ))}
        </article>
        <button
          type="button"
          data-testid="btn-go-home"
          onClick={ this.directToLogin }
        >
          Voltar ao início
        </button>
      </main>
    );
  }
}

Ranking.propTypes = {
  history: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default Ranking;
