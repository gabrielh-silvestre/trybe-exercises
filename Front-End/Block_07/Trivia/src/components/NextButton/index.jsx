import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { addPlayerToRanking } from '../../services/localStorage';

import styles from './styles.module.css';

class NextButton extends Component {
  handleClick = () => {
    const { questionId, history } = this.props;

    if (questionId === '4') {
      history.push('/feedback');
      addPlayerToRanking();
    } else {
      history.push(`/question/${Number(questionId) + 1}`);
    }
  };

  render() {
    return (
      <button
        type="button"
        className={ styles.buttonContainer }
        data-testid="btn-next"
        onClick={ this.handleClick }
      >
        Next
      </button>
    );
  }
}

export default NextButton;

NextButton.propTypes = {
  questionId: PropTypes.string.isRequired,
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
};
