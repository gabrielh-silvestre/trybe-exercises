import React, { Component } from 'react';
import PropTypes from 'prop-types';
export default class Button extends Component {
  render() {
    const { btnText, callback } = this.props;

    return (
      <>
        <button onClick={callback}>{btnText}</button>
      </>
    );
  }
}

Button.propTypes = {
  btnText: PropTypes.string.isRequired,
  callback: PropTypes.func,
};
