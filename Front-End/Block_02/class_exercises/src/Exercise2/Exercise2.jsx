import React, { Component } from 'react';

export default class Exercise2 extends Component {
  constructor(props) {
    super(props);

    this.state = { clicks: 0 };

    this.handleEvent = this.handleEvent.bind(this);
  }

  handleEvent() {
    this.setState((prev) => ({ clicks: prev.clicks + 1 }));
  }

  render() {
    const { clicks } = this.state;

    return (
      <>
        <button onClick={this.handleEvent}>Clique</button>
        <button onMouseDown={this.handleEvent}>Clique e segure</button>
        <button onMouseOver={this.handleEvent}>Passe por cima</button>
        <h3>{clicks}</h3>
      </>
    );
  }
}
