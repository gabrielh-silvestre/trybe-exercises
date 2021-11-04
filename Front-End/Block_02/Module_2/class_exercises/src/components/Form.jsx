import React, { Component } from 'react';
import Input from './Input';

export default class Form extends Component {
  constructor(props) {
    super(props);

    this.state = {
      userName: undefined,
      userAge: undefined,
      userTech: undefined,
      userDesc: undefined,
      agreement: undefined,
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange({ target }) {
    const { name, value, type, checked } = target;

    type === 'checkbox'
      ? this.setState({ [name]: checked })
      : this.setState({ [name]: value });
  }

  render() {
    return (
      <form>
        <Input
          inputConfig={{ type: 'text', name: 'userName', id: 'userName' }}
          handleChange={this.handleChange}
        />
        <Input
          inputConfig={{ type: 'number', name: 'userAge', id: 'userAge' }}
          handleChange={this.handleChange}
        />
        <select name="userTech" id="userTech">
          <option value="react">React</option>
          <option value="angular">Angular</option>
          <option value="vue">Vue</option>
        </select>
        <textarea name="userDesc" id="userDesc" cols="30" rows="10"></textarea>
        <Input
          inputConfig={{ type: 'checkbox', name: 'agreement', id: 'agreement' }}
          handleChange={this.handleChange}
        />
      </form>
    );
  }
}
