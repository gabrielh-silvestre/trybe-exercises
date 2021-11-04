import React, { Component } from 'react';

export default class Select extends Component {
  render() {
    const { name, options, handleChange } = this.props;

    return (
      <select id={name} onChange={handleChange}>
        {options.map((opt) => (
          <option key={opt} value={opt}>
            {opt}
          </option>
        ))}
      </select>
    );
  }
}
