import React, { Component } from 'react'

export default class Fieldset extends Component {
  render() {
    const { children, id } = this.props;

    return (
      <fieldset id={id}>
        {children}
      </fieldset>
    )
  }
}
