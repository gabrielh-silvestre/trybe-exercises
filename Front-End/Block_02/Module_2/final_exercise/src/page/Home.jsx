import React, { Component } from 'react';
import Button from '../components/Button';
import Form from '../components/Form';
import PersonalForm from '../components/PersonalForm';
import ProfessionalForm from '../components/ProfessionalForm';
import Resume from '../components/Resume';

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
  formError: true,
  submitted: false,
};

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = initialState;

    this.handleChange = this.handleChange.bind(this);
    this.showResume = this.showResume.bind(this);
  }

  handleChange({ target }) {
    const { type, name, value } = target;

    type === 'checkbox' ?? this.setState({ home: value });

    this.setState({ [name]: value });
  }

  showResume(event) {
    const { submitted } = this.state;

    event.preventDefault();

    this.setState({ submitted: submitted ? false : true });
  }

  componentDidUpdate(_, prevState) {
    if (
      Object.values(prevState).every((value) => value !== '') &&
      prevState.roleDescription !== this.state.roleDescription
    ) {
      this.setState({ formError: false });
    }
  }

  render() {
    const { submitted, formError } = this.state;

    return (
      <main>
        <article>
          <Form handleClick={this.handleClick}>
            <PersonalForm handleChange={this.handleChange} />
            <ProfessionalForm handleChange={this.handleChange} />
            <Button
              type="submit"
              callback={this.showResume}
              name="Enviar"
              hasError={formError}
            />
          </Form>
        </article>
        <article>{submitted && <Resume userInfo={this.state} />}</article>
      </main>
    );
  }
}
