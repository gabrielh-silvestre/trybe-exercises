import React, { Component } from 'react';

export default class Form extends Component {
  render() {
    const { children, handleClick } = this.props;

    return <form onClick={handleClick}>{children}</form>;
  }
}
