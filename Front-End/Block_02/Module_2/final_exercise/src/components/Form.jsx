import React, { Component } from 'react'

export default class Form extends Component {
  render() {
    const { children } = this.props

    return (
      <form>
        {children}
      </form>
    )
  }
}
