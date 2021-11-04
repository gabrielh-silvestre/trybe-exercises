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
      agreement: false,
      hasError: false,
    };

    this.fileInput = React.createRef();

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleError = this.handleError.bind(this);
    this.nameValidator = this.nameValidator.bind(this);
    this.ageValidator = this.ageValidator.bind(this);
  }

  handleChange({ target }) {
    const { name, value, type, checked } = target;

    type === 'checkbox'
      ? this.setState({ [name]: checked })
      : this.setState({ [name]: value });
  }

  handleSubmit(event) {
    event.preventDefault();

    console.log(this.fileInput.current.files[0].name);
  }

  handleError() {
    this.nameValidator() && this.ageValidator()
      ? this.setState({ hasError: false })
      : this.setState({ hasError: true });
  }

  nameValidator() {
    const { userName } = this.state;
    return (
      userName !== undefined && userName.length <= 16 && userName.length > 0
    );
  }

  ageValidator() {
    const { userAge } = this.state;
    return userAge !== undefined && userAge <= 100 && userAge >= 18;
  }

  componentDidUpdate(_, prevState) {
    const { userName: prevName, userAge: prevAge } = prevState;
    const { userName, userAge } = this.state;

    if (prevName !== userName || prevAge !== userAge) {
      this.handleError();
    }
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <fieldset>
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
        </fieldset>
        <fieldset>
          <TextArea name="userDesc" handleChange={this.handleChange} />
          <input
            type="file"
            name="userImage"
            id="userImage"
            ref={this.fileInput}
          />
        </fieldset>
        <fieldset>
          <Input
            inputConfig={{ type: 'checkbox', name: 'agreement' }}
            handleChange={this.handleChange}
          />
          <button type="submit">Enviar</button>
        </fieldset>
      </form>
    );
  }
}
