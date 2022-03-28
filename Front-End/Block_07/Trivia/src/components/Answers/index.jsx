import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import styles from './styles.module.css';
import Timer from '../Timer';
import { hitAnswer, selectAnswer } from '../../redux/actions';

const ONE_SECOND = 1000;
const DEFAULT_HIT_SCORE = 10;
const DIFFICULTY_SCORE = {
  easy: 1,
  medium: 2,
  hard: 3,
};
const INITIAL_STATE = {
  sortedAnswers: [],
  timerInterval: undefined,
  time: 30,
};

export class Answers extends Component {
  constructor(props) {
    super(props);

    this.state = INITIAL_STATE;
  }

  componentDidMount() {
    this.mountAnswers();
  }

  componentDidUpdate(prevProps) {
    const { actualQuestion } = this.props;

    if (prevProps.actualQuestion !== actualQuestion) {
      this.mountAnswers(true);
    }
  }

  handleClick = ({ target: { innerText } }) => {
    this.resetTimer();

    const { actualQuestion, answerHit, answerSelect } = this.props;
    const { time } = this.state;
    const { difficulty, correct_answer: correctAnswer } = actualQuestion;

    if (innerText === correctAnswer) {
      const totalScore = DEFAULT_HIT_SCORE + time * DIFFICULTY_SCORE[difficulty];
      answerHit(totalScore);
    }
    answerSelect();
  };

  setTimerInterval = () => {
    this.setState({
      timerInterval: setInterval(() => {
        this.decrementTime();
      }, ONE_SECOND),
    });
  };

  decrementTime = () => {
    this.setState((prevState) => ({
      time: prevState.time - 1,
    }));
  };

  resetTimer = () => {
    const { timerInterval } = this.state;

    clearInterval(timerInterval);
  };

  sortAnswers = (arr) => {
    const answerArr = arr.map((question, i) => ({
      testid: i === arr.length - 1 ? 'correct-answer' : `wrong-answer-${i}`,
      content: question,
      sortId: Math.random(),
    }));

    return answerArr.sort((a, b) => a.sortId - b.sortId);
  };

  generateAnswers = () => {
    const { actualQuestion } = this.props;

    const allQuestions = [
      ...actualQuestion.incorrect_answers,
      actualQuestion.correct_answer,
    ];
    const sortedAnswers = this.sortAnswers(allQuestions);
    this.setState({ sortedAnswers });
  };

  mountAnswers = (isUpdate) => {
    if (isUpdate) {
      this.setState(INITIAL_STATE, () => {
        this.generateAnswers();
        this.setTimerInterval();
      });
    } else {
      this.generateAnswers();
      this.setTimerInterval();
    }
  }

  render() {
    const { sortedAnswers, time } = this.state;
    const { actualQuestion, isSelected } = this.props;

    return (
      <section data-testid="answer-options" className={ styles.answersContainer }>
        <Timer stop={ this.resetTimer } time={ time } />
        {sortedAnswers.map(({ testid, content }) => (
          <button
            key={ content }
            type="button"
            disabled={ isSelected }
            className={
              content === actualQuestion.correct_answer && isSelected
                ? styles.correctAnswer
                : styles.wrongAnswer
            }
            onClick={ this.handleClick }
            data-testid={ testid }
          >
            {content}
          </button>
        ))}
      </section>
    );
  }
}

const mapStateToProps = (state) => ({
  actualQuestion: state.game.actualQuestion,
  isSelected: state.game.isSelected,
});

const mapDispatchToProps = (dispatch) => ({
  answerHit: (score) => dispatch(hitAnswer(score)),
  answerSelect: () => dispatch(selectAnswer),
});

export default connect(mapStateToProps, mapDispatchToProps)(Answers);

Answers.propTypes = {
  actualQuestion: PropTypes.shape({
    category: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    difficulty: PropTypes.string.isRequired,
    question: PropTypes.string.isRequired,
    correct_answer: PropTypes.string.isRequired,
    incorrect_answers: PropTypes.arrayOf(String).isRequired,
  }).isRequired,

  isSelected: PropTypes.bool.isRequired,

  answerHit: PropTypes.func.isRequired,
  answerSelect: PropTypes.func.isRequired,
};
