import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { changeQuestion, getQuestions, saveToken } from '../../redux/actions';

import Header from '../../components/Header';

import styles from './styles.module.css';
import Question from '../../components/Question';
import Answers from '../../components/Answers';
import NextButton from '../../components/NextButton';

const ERROR_CODE = 3;

class Quizz extends Component {
  async componentDidMount() {
    const { questionsGet, token } = this.props;

    await questionsGet(token);
  }

  componentDidUpdate(prevProps) {
    const { responseCode, questions, routeProps } = this.props;

    if (responseCode === ERROR_CODE) {
      this.getNewTokenAndQuestions();
    }

    if (
      prevProps.questions !== questions
      || prevProps.routeProps !== routeProps
    ) {
      this.getActualQuestion();
    }
  }

  getNewTokenAndQuestions = async () => {
    await this.handleToken();
    const { questionsGet, token } = this.props;

    await questionsGet(token);
    this.getActualQuestion();
  };

  getActualQuestion = () => {
    const {
      questions,
      questionChange,
      routeProps: {
        match: { params },
      },
    } = this.props;

    const questionId = params.qNumber;
    const actualQuestion = questions[questionId];

    questionChange(actualQuestion);
  };

  handleToken = async () => {
    const { storeToken } = this.props;
    storeToken();
  };

  render() {
    const {
      actualQuestion,
      isSelected,
      routeProps: {
        history,
        match: { params },
      },
    } = this.props;

    const questionId = params.qNumber;

    return (
      <>
        <Header />
        {actualQuestion && (
          <article className={ styles.container }>
            <Question />
            <Answers />
            <div>
              {isSelected && (
                <NextButton history={ history } questionId={ questionId } />
              )}
            </div>
          </article>
        )}
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  responseCode: state.quiz.responseCode,
  questions: state.quiz.questions,
  isLoading: state.quiz.isLoading,
  actualQuestion: state.game.actualQuestion,
  isSelected: state.game.isSelected,
  token: state.token,
});

const mapDispatchToProps = (dispatch) => ({
  questionsGet: (token) => dispatch(getQuestions(token)),
  storeToken: () => dispatch(saveToken()),
  questionChange: (actualQuestion) => dispatch(changeQuestion(actualQuestion)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Quizz);

Quizz.propTypes = {
  responseCode: PropTypes.number.isRequired,
  token: PropTypes.string.isRequired,
  storeToken: PropTypes.func.isRequired,
  questionsGet: PropTypes.func.isRequired,
  questionChange: PropTypes.func.isRequired,
  actualQuestion: PropTypes.shape({}).isRequired,
  isSelected: PropTypes.bool.isRequired,

  questions: PropTypes.arrayOf(
    PropTypes.shape({
      category: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      question: PropTypes.string.isRequired,
      correct_answer: PropTypes.string.isRequired,
      incorrect_answers: PropTypes.arrayOf(String).isRequired,
    }).isRequired,
  ).isRequired,

  routeProps: PropTypes.shape({
    match: PropTypes.shape({
      params: PropTypes.shape({
        qNumber: PropTypes.string.isRequired,
      }).isRequired,
    }).isRequired,
    history: PropTypes.shape({
      push: PropTypes.func.isRequired,
    }).isRequired,
  }).isRequired,
};
