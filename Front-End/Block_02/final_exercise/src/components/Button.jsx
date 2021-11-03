import React, { Component } from 'react';
import PropTypes from 'prop-types';
export default class Button extends Component {
  render() {
    const { btnText, callback, able } = this.props;

    return (
      <>
        <button disabled={able} onClick={callback}>{btnText}</button>
      </>
    );
  }
}

Button.propTypes = {
  btnText: PropTypes.string.isRequired,
  callback: PropTypes.func,
  able: PropTypes.bool,
};
