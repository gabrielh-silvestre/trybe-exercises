import React, { Component } from 'react';
import Fieldset from './Fieldset';
import Input from './Input';
import Select from './Select';

export default class Form extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: undefined,
      email: undefined,
      cpf: undefined,
      addres: undefined,
      city: undefined,
      home: 'house',
    };
  }

  render() {
    return (
      <form>
        <Fieldset id="personal-data">
          <Input type="text" name="name" handleChange="" />
          <Input type="email" name="email" handleChange="" />
          <Input type="number" name="cpf" handleChange="" />
          <Input type="text" name="addres" handleChange="" />
          <Input type="text" name="city" handleChange="" />
          <Select name="state" handleChange="" options={[]} />
          <div>
            <label htmlFor="house">House</label>
            <input
              type="radio"
              name="home"
              value="house"
              id="house"
              checked={true}
            />
            <label htmlFor="appartment">Appartment</label>
            <input
              type="radio"
              name="home"
              value="appartment"
              id="appartment"
            />
          </div>
        </Fieldset>
      </form>
    );
  }
}
