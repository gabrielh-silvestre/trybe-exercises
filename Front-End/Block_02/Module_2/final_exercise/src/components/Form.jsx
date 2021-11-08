import React, { useEffect, useState } from 'react';
import PersonalFieldset from './PersonalFieldset';
import ProffesionalFieldSet from './ProfessionalFieldset';

const initialForm = {
  name: '',
  email: '',
  cpf: '',
  address: '',
  city: '',
  state: 'Acre',
  homeType: 'house',
  resume: '',
  role: '',
  roleDescription: '',
};

export default function Form() {
  const [form, setForm] = useState(initialForm);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    Object.values(form).some((item) => item === '')
      ? setHasError(true)
      : setHasError(false);
  }, [form]);

  return (
    <form>
      <PersonalFieldset
        user={form}
        setPersonalForm={setForm}
      />
      <ProffesionalFieldSet
        user={form}
        setProfessionalForm={setForm}
      />
    </form>
  );
}
