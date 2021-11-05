import React, { Component } from 'react';

export default class Button extends Component {
  render() {
    const { callback, name, type, hasError } = this.props;

    return (
      <>
        <button type={type} name={name} disabled={hasError} onClick={callback}>
          {name}
        </button>
      </>
    );
  }
}
