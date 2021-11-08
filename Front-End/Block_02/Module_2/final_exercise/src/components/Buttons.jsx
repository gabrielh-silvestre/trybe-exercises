import React from 'react';
import PropTypes from 'prop-types'

export default function Buttons(props) {
  const { callback, btnText, disabled = false } = props;

  return <button disabled={disabled} onClick={callback}>{btnText}</button>;
}

Buttons.propTypes = {
  callback: PropTypes.func.isRequired,
  btnText: PropTypes.string.isRequired,
  disabled: PropTypes.bool,
}
