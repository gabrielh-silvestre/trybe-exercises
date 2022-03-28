import React from 'react';
import PropTypes from 'prop-types';

export default function Input({ type, name, label, value, onChange, testid }) {
  return (
    <label htmlFor={ name }>
      {label}
      <input
        type={ type }
        id={ name }
        name={ name }
        value={ value }
        onChange={ onChange }
        data-testid={ testid }
      />
    </label>
  );
}

Input.propTypes = {
  type: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  label: PropTypes.string,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  testid: PropTypes.string,
};

Input.defaultProps = {
  label: '',
  testid: '',
};
