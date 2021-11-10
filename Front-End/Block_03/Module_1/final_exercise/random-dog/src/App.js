import React, { Component } from 'react';
import './App.css';
// import Card from './components/Card';
import Card from './components/CardClass';

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      dogName: '',
    };
  }

  render() {
    const { dogName } = this.state;
    return (
      <div className="App">
        <input
          type="text"
          name=""
          id=""
          onChange={({ target: { value } }) =>
          this.setState({ dogName: value })
        }
        />
        <Card dogName={dogName} />
      </div>
    );
  }
}
