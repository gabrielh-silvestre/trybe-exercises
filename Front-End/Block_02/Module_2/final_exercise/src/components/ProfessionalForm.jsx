import React, { Component } from 'react';
import Fieldset from './Fieldset';
import Form from './Form';
import Input from './Input';
import TextArea from './TextArea';

export default class ProfessionalForm extends Component {
  render() {
    const { handleChange } = this.props;

    return (
      <>
        <Form>
          <Fieldset>
            <TextArea name="resume" max={1000} handleChange={handleChange} />
            <TextArea name="role" max={40} handleChange={handleChange} />
            <Input
              type="text"
              name="roleDescription"
              max={500}
              handleChange={handleChange}
            />
          </Fieldset>
        </Form>
      </>
    );
  }
}
