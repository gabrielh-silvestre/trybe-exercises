import React, { Component } from 'react';

export default class Input extends Component {
  render() {
    const { type, name, max, handleChange } = this.props;

    return (
      <>
        <label htmlFor={name}>{name}</label>
        <input type={type} name={name} id={name} required maxLength={max} onChange={handleChange} />
      </>
    );
  }
}
