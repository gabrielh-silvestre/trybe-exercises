import React from 'react';
import PropTypes from 'prop-types';

export default function Select({
  name,
  label,
  value,
  onChange,
  testId,
  options,
}) {
  return (
    <label htmlFor={ name }>
      {label}
      <select
        name={ name }
        id={ name }
        value={ value }
        data-testid={ testId }
        onChange={ onChange }
      >
        {options.map((option, i) => (
          <option key={ i } id={ i } value={ option } data-testid={ option }>
            {option}
          </option>
        ))}
      </select>
    </label>
  );
}

Select.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string,
  value: PropTypes.string.isRequired,
  options: PropTypes.arrayOf(String).isRequired,
  onChange: PropTypes.func.isRequired,
  testId: PropTypes.string,
};

Select.defaultProps = {
  label: '',
  testId: '',
};
