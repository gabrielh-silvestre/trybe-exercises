import React, { useState } from 'react';
import PersonalFieldset from './PersonalFieldSet';

const initialPersonalForm = {
  name: '',
  email: '',
  cpf: '',
  address: '',
  city: '',
  state: 'Acre',
  homeType: 'house',
};

export default function Form() {
  const [personalForm, setPersonalForm] = useState(initialPersonalForm);

  function handleChange({ target: { type, name, value } }) {
    personalForm[name] = value;

    setPersonalForm(() => ({...personalForm, [name]: value }));
  }

  return (
    <form>
      <PersonalFieldset user={personalForm} handleChange={handleChange} />
    </form>
  );
}
