import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class PointsFeedback extends Component {
  render() {
    const { points, info, testId } = this.props;

    return (
      <p>
        {`${info}:`}
        {' '}
        <span data-testid={ testId }>{points}</span>
      </p>
    );
  }
}

PointsFeedback.propTypes = {
  points: PropTypes.number.isRequired,
  info: PropTypes.string.isRequired,
  testId: PropTypes.string.isRequired,
};
