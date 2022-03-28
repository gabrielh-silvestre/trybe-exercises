import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import Header from '../../components/Header';
import PointsFeedback from '../../components/PointsFeedback';

import styles from './styles.module.css';

class Feedback extends Component {
  directToHome = () => {
    const { history } = this.props;

    history.push('/');
  };

  directToRanking = () => {
    const { history } = this.props;

    history.push('/ranking');
  };

  render() {
    const { assertions, score } = this.props;
    const NUMBER_ASSERTS = 3;
    return (
      <>
        <Header />
        <article className={ styles.container }>
          <div>
            <h3 data-testid="feedback-text">
              {assertions < NUMBER_ASSERTS
                ? 'Could be better...'
                : 'Well Done!'}
            </h3>
            <section className={ styles.scoreSection }>
              <PointsFeedback
                points={ score }
                info="Score"
                testId="feedback-total-score"
              />
              <PointsFeedback
                points={ assertions }
                info="Hits"
                testId="feedback-total-question"
              />
            </section>
            <section className={ styles.buttonsSection }>
              <button
                type="button"
                data-testid="btn-play-again"
                onClick={ this.directToHome }
              >
                Play again
              </button>
              <button
                type="button"
                data-testid="btn-ranking"
                onClick={ this.directToRanking }
              >
                Ranking
              </button>
            </section>
          </div>
        </article>
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  assertions: state.player.assertions,
  score: state.player.score,
});

export default connect(mapStateToProps, null)(Feedback);

Feedback.propTypes = {
  assertions: PropTypes.number.isRequired,
  score: PropTypes.number.isRequired,

  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
};
