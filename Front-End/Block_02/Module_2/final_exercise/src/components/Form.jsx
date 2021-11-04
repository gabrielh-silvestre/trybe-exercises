import React, { Component } from 'react';
import Fieldset from './Fieldset';
import Input from './Input';
import Select from './Select';

export default class Form extends Component {
  constructor(props) {
    super(props);

    this.state = {
      allStates: [
        'AC',
        'AL',
        'AP',
        'AM',
        'BA',
        'CE',
        'DF',
        'ES',
        'GO',
        'MA',
        'MT',
        'MS',
        'MG',
        'PA',
        'PB',
        'PR',
        'PE',
        'PI',
        'RJ',
        'RN',
        'RS',
        'RO',
        'RR',
        'SC',
        'SP',
        'SE',
        'TO',
      ],
      name: undefined,
      email: undefined,
      cpf: undefined,
      addres: undefined,
      city: undefined,
      state: 'AC',
      home: 'house',
      house: true,
      appartment: false,
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange({ target: { type, name, value, checked } }) {
    this.setState({ [name]: value });
  }

  render() {
    const { house, appartment, allStates } = this.state;

    return (
      <form>
        <Fieldset id="personal-data">
          <Input type="text" name="name" handleChange={this.handleChange} />
          <Input type="email" name="email" handleChange={this.handleChange} />
          <Input type="number" name="cpf" handleChange={this.handleChange} />
          <Input type="text" name="addres" handleChange={this.handleChange} />
          <Input type="text" name="city" handleChange={this.handleChange} />
          <Select
            name="state"
            handleChange={this.handleChange}
            options={allStates}
          />
          <div>
            <label htmlFor="house">House</label>
            <input
              type="radio"
              name="home"
              value="house"
              id="house"
              checked={house}
              onChange={this.handleChange}
            />
            <label htmlFor="appartment">Appartment</label>
            <input
              type="radio"
              name="home"
              value="appartment"
              id="appartment"
              checked={appartment}
              onChange={this.handleChange}
            />
          </div>
        </Fieldset>
      </form>
    );
  }
}
