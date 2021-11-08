import React, { useEffect, useState } from 'react';
import Buttons from './Buttons';
import FormFeedback from './FormFeedback';
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
  const [showFeedback, setShowFeedback] = useState(false);

  useEffect(() => {
    Object.values(form).some((item) => item === '')
      ? setHasError(true)
      : setHasError(false);
  }, [form]);

  function clearForm(event) {
    event.preventDefault();
    setForm(initialForm);
    setShowFeedback(false);
  }

  function handleSubmit(event) {
    event.preventDefault();
    setShowFeedback(true);
  }

  return (
    <form>
      <PersonalFieldset user={form} setPersonalForm={setForm} />
      <ProffesionalFieldSet user={form} setProfessionalForm={setForm} />
      <Buttons callback={handleSubmit} btnText="Enviar" disabled={hasError} />
      <Buttons callback={clearForm} btnText="Limpar" />
      {showFeedback ? <FormFeedback user={form} /> : ''}
    </form>
  );
}
