import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Input extends Component {
  render() {
    const { type, label, name, value, testId, onChange } = this.props;

    return (
      <label htmlFor={ name }>
        {label}
        <input
          type={ type }
          id={ name }
          name={ name }
          value={ value }
          onChange={ onChange }
          data-testid={ testId }
        />
      </label>
    );
  }
}

Input.propTypes = {
  type: PropTypes.string.isRequired,
  label: PropTypes.string,
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  testId: PropTypes.string,
  onChange: PropTypes.func,
};

Input.defaultProps = {
  label: '',
  testId: '',
  onChange: () => {},
};
