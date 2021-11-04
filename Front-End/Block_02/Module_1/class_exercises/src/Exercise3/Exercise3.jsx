import React, { Component } from 'react';

export default class Exercise3 extends Component {
  constructor(props) {
    super(props);

    this.state = {
      clicks: 0,
      textColor: 'black',
    };

    this.handleEvent = this.handleEvent.bind(this);
  }

  handleEvent() {
    const { clicks } = this.state;

    this.setState(
      (prev) => ({ clicks: prev.clicks + 1 }),
      () => {
        clicks % 2 !== 0
          ? this.setState({ textColor: 'green' })
          : this.setState({ textColor: 'black' });
      }
    );
  }

  render() {
    const { clicks, textColor } = this.state;

    return (
      <>
        <button onClick={this.handleEvent}>Clique</button>
        <button onMouseDown={this.handleEvent}>Clique e segure</button>
        <button onMouseOver={this.handleEvent}>Passe por cima</button>
        <h3 style={{color: textColor }}>{clicks}</h3>
      </>
    );
  }
}
