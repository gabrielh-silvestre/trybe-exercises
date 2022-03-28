import React from 'react';
import PropTypes from 'prop-types';

export default function Input({
  type,
  name,
  label,
  value,
  placeHolder,
  className,
  checked,
  testid,
  onChange,
}) {
  return (
    <label htmlFor={ name }>
      {label}
      <input
        type={ type }
        id={ name }
        name={ name }
        value={ value }
        placeholder={ placeHolder }
        className={ className }
        checked={ checked }
        data-testid={ testid }
        onChange={ onChange }
      />
    </label>
  );
}

Input.propTypes = {
  type: PropTypes.string.isRequired,
  label: PropTypes.string,
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  placeHolder: PropTypes.string,
  className: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  testid: PropTypes.string,
  checked: PropTypes.bool,
};

Input.defaultProps = {
  label: '',
  testid: '',
  checked: false,
  className: '',
  placeHolder: '',
};
