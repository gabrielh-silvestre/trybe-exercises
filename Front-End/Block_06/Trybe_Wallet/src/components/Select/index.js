import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Select extends Component {
  render() {
    const { label, name, value, options, onChange, testId } = this.props;

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
}

Select.propTypes = {
  label: PropTypes.string,
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  options: PropTypes.arrayOf(String).isRequired,
  onChange: PropTypes.func,
  testId: PropTypes.string,
};

Select.defaultProps = {
  label: '',
  testId: '',
  onChange: () => {},
};
