import React, { Component } from 'react'

export default class Exercise1 extends Component {
  constructor(props) {
    super(props);

    this.handleEvent = this.handleEvent.bind(this);
  }

  handleEvent() {
    const { text } = this.props;

    console.log(text);
  }

  render() {
    return (
      <>
        <button onClick={this.handleEvent}>Clique</button>
        <button onMouseDown={this.handleEvent}>Clique e segure</button>
        <button onMouseOver={this.handleEvent}>Passe por cima</button>
      </>
    )
  }
}
