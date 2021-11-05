import React, { Component } from 'react';
import PersonalForm from '../components/PersonalForm';
import ProfessionalForm from '../components/ProfessionalForm';

const initialState = {
  name: '',
  email: '',
  cpf: '',
  address: '',
  city: '',
  state: '',
  home: '',
  resume: '',
  role: '',
  roleDescription: '',
  formError: {},
  submitted: false,
};

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = initialState;

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange({ target }) {
    const { name, value } = target;
    this.setState({ [name]: value });
  }

  render() {
    return (
      <div>
        <PersonalForm handleChange={this.handleChange} />
        <ProfessionalForm handleChange={this.handleChange} />
      </div>
    );
  }
}
