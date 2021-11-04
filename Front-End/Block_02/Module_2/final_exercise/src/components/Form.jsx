import React, { Component } from 'react';
import Fieldset from './Fieldset';
import Input from './Input';
import Select from './Select';

export default class Form extends Component {
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
            <input type="radio" name="home" value="house" checked={true} />
            <input type="radio" name="home" value="appartment" />
          </div>
        </Fieldset>
      </form>
    );
  }
}
