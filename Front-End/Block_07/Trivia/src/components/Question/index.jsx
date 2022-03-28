import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import styles from './styles.module.css';

class Question extends Component {
  render() {
    const { actualQuestion } = this.props;

    return (
      <>
        <section className={ styles.questionContainer }>
          <h2 data-testid="question-text">{actualQuestion.question}</h2>
        </section>

        <p className={ styles.categoryContainer }>
          Category -
          {' '}
          <span data-testid="question-category">{actualQuestion.category}</span>
        </p>
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  actualQuestion: state.game.actualQuestion,
});

export default connect(mapStateToProps)(Question);

Question.propTypes = {
  actualQuestion: PropTypes.shape({
    category: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    question: PropTypes.string.isRequired,
    correct_answer: PropTypes.string.isRequired,
    incorrect_answers: PropTypes.arrayOf(String).isRequired,
  }).isRequired,
};
