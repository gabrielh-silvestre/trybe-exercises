import React, { Component } from 'react';

export default class Input extends Component {
  render() {
    const { type, name, handleChange } = this.props;

    return (
      <>
        <label htmlFor={name}>{name}</label>
        <input type={type} name={name} id={name} onChange={handleChange} />
      </>
    );
  }
}
