import React, { Component } from 'react';

export default class TextArea extends Component {
  render() {
    const { name, max, handleChange } = this.props;

    return (
      <>
        <label htmlFor={name}>{name}</label>
        <textarea
          name={name}
          id={name}
          cols="30"
          rows="10"
          required
          maxLength={max}
          onChange={handleChange}
        ></textarea>
      </>
    );
  }
}
