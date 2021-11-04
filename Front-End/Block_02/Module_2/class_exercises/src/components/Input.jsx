import React, { Component } from 'react'

export default class Input extends Component {
  render() {
    const { type, name, id } = this.props.inputConfig;
    const { handleChange } = this.props;

    return (
      <>
        <input type={type} name={name} id={id} onChange={handleChange} />
      </>
    )
  }
}
