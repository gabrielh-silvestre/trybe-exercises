import React, { Component } from 'react';
import Input from './Input';
import Select from './Select';
import TextArea from './TextArea';

export default class Form extends Component {
  constructor(props) {
    super(props);

    this.state = {
      userName: undefined,
      userAge: undefined,
      userTech: 'react',
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
          inputConfig={{ type: 'text', name: 'userName' }}
          handleChange={this.handleChange}
        />
        <Input
          inputConfig={{ type: 'number', name: 'userAge' }}
          handleChange={this.handleChange}
        />
        <Select
          selectConfig={{
            name: 'userTech',
            options: ['react', 'angular', 'vue'],
          }}
          handleChange={this.handleChange}
        />
        <TextArea name="userDesc" handleChange={this.handleChange} />
        <Input
          inputConfig={{ type: 'checkbox', name: 'agreement', id: 'agreement' }}
          handleChange={this.handleChange}
        />
      </form>
    );
  }
}
