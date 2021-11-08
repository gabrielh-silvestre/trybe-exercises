import React, { useState } from 'react';
import PersonalFieldset from './PersonalFieldset';

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
  const [hasError, setHasError] = useState(false);

  return (
    <form>
      <PersonalFieldset
        user={personalForm}
        setPersonalForm={setPersonalForm}
        setHasError={setHasError}
      />
    </form>
  );
}
