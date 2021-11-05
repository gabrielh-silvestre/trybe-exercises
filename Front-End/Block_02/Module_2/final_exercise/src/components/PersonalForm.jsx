import React, { Component } from 'react';
import Fieldset from './Fieldset';
import Form from './Form';
import Input from './Input';
import Select from './Select';

const brazilStates = [
  { key: 'AC', value: 'Acre' },
  { key: 'AL', value: 'Alagoas' },
  { key: 'AP', value: 'Amapá' },
  { key: 'AM', value: 'Amazonas' },
  { key: 'BA', value: 'Bahia' },
  { key: 'CE', value: 'Ceará' },
  { key: 'DF', value: 'Distrito Federal' },
  { key: 'ES', value: 'Espírito Santo' },
  { key: 'GO', value: 'Goiás' },
  { key: 'MA', value: 'Maranhão' },
  { key: 'MT', value: 'Mato Grosso' },
  { key: 'MS', value: 'Mato Grosso do Sul' },
  { key: 'MG', value: 'Minas Gerais' },
  { key: 'PA', value: 'Pará' },
  { key: 'PB', value: 'Paraíba' },
  { key: 'PR', value: 'Paraná' },
  { key: 'PE', value: 'Pernambuco' },
  { key: 'PI', value: 'Piauí' },
  { key: 'RJ', value: 'Rio de Janeiro' },
  { key: 'RN', value: 'Rio Grande do Norte' },
  { key: 'RS', value: 'Rio Grande do Sul' },
  { key: 'RO', value: 'Rondônia' },
  { key: 'RR', value: 'Roraima' },
  { key: 'SC', value: 'Santa Catarina' },
  { key: 'SP', value: 'São Paulo' },
  { key: 'SE', value: 'Sergipe' },
  { key: 'TO', value: 'Tocantins' },
];

export default class PersonalForm extends Component {
  render() {
    const { handleChange } = this.props;

    return (
      <>
        <Form>
          <Fieldset>
            <Input type="text" name="name" max={40} handleChange={handleChange} />
            <Input type="text" name="email" max={50} handleChange={handleChange} />
            <Input type="text" name="cpf" max={11} handleChange={handleChange} />
            <Input type="text" name="address" max={200} handleChange={handleChange} />
            <Input type="text" name="city" max={28} handleChange={handleChange} />
            <Select name="state" options={brazilStates} handleChange={handleChange} />
            <label htmlFor="house">Casa: </label>
            <input type="radio" name="home" value="house" defaultChecked />
            <label htmlFor="house">Apartamento: </label>
            <input type="radio" name="home" value="appartment" />
          </Fieldset>
        </Form>
      </>
    );
  }
}
