import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Select extends Component {
  render() {
    const { name, options } = this.props.selectConfig;
    const { handleChange } = this.props;

    return (
      <select name={name} id={name} onChange={handleChange}>
        {options.map((opt) => (
          <option key={opt} value={opt}>
            {opt.replace(/^\w/, (char) => char.toUpperCase())}
          </option>
        ))}
      </select>
    );
  }
}

Select.propTypes = {
  name: PropTypes.string.isRequired,
  options: PropTypes.array.isRequired,
  handleChange: PropTypes.func.isRequired,
};
