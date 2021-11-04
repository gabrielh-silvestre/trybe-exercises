import React, { Component } from 'react';

export default class Select extends Component {
  render() {
    const { name, options, handleChange } = this.props;

    return (
      <>
        <label htmlFor={name}>{name}</label>
        <select id={name} name={name} onChange={handleChange}>
          {options.map((opt) => (
            <option key={opt} value={opt}>
              {opt}
            </option>
          ))}
        </select>
      </>
    );
  }
}
