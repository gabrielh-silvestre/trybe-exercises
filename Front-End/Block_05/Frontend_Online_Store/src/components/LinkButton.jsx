import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

export default class LinkButton extends Component {
  render() {
    const { path, testId, icon } = this.props;
    return (
      <Link
        to={ path }
        type="submit"
        data-testid={ testId }
      >
        { icon }
      </Link>
    );
  }
}

LinkButton.propTypes = {
  path: PropTypes.string.isRequired,
  testId: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
};
