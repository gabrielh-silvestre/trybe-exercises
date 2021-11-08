import React, { useEffect, useState } from 'react';
import PersonalFieldset from './PersonalFieldset';
import ProffesionalFieldSet from './ProfessionalFieldset';

const initialPersonalForm = {
  name: '',
  email: '',
  cpf: '',
  address: '',
  city: '',
  state: 'Acre',
  homeType: 'house',
};

const initialProfessionalForm = {
  resume: '',
  role: '',
  roleDescription: '',
};

export default function Form() {
  const [personalForm, setPersonalForm] = useState(initialPersonalForm);
  const [professionalForm, setProfessionalForm] = useState(initialProfessionalForm);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    Object.values(professionalForm).some((item) => item === '')
    || Object.values(personalForm).some((item) => item === '')
      ? setHasError(true)
      : setHasError(false);
  }, [personalForm, professionalForm]);

  return (
    <form>
      <PersonalFieldset
        user={personalForm}
        setPersonalForm={setPersonalForm}
        setHasError={setHasError}
      />
      <ProffesionalFieldSet
        user={professionalForm}
        setProfessionalForm={setProfessionalForm}
        setHasError={setHasError}
      />
    </form>
  );
}
