import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

import brazileanStates from '../data/brazilStates';

export default function PersonalFieldset(props) {
  const personalForm = props.user;

  const { setPersonalForm, setHasError } = props;

  function handleChange({ target: { name, value } }) {
    setPersonalForm(() => ({ ...personalForm, [name]: value }));
  }

  useEffect(() => {
    Object.values(personalForm).some((item) => item === '')
      ? setHasError(true)
      : setHasError(false);
  });

  return (
    <fieldset>
      <label htmlFor="name">
        Nome:
        <input
          type="text"
          name="name"
          id="name"
          onChange={handleChange}
        />
      </label>

      <label htmlFor="email">
        Email:
        <input
          type="text"
          name="email"
          id="email"
          onChange={handleChange}
        />
      </label>

      <label htmlFor="cpf">
        CPF:
        <input
          type="text"
          name="cpf"
          id="cpf"
          onChange={handleChange}
        />
      </label>

      <label htmlFor="address">
        Endereço:
        <input
          type="text"
          name="address"
          id="address"
          onChange={handleChange}
        />
      </label>

      <label htmlFor="city">
        Cidade:
        <input
          type="text"
          name="city"
          id="city"
          onChange={handleChange}
        />
      </label>

      <label htmlFor="state">
        Estado:
        <select
          type="text"
          name="state"
          id="state"
          onChange={handleChange}
        >
          {brazileanStates.map(({ key, value }) => (
            <option key={key} value={value}>
              {key}
            </option>
          ))}
        </select>
      </label>

      <label htmlFor="house">
        Casa:
        <input
          type="radio"
          name="homeType"
          value="house"
          id="house"
          onChange={handleChange}
          defaultChecked
        />
      </label>

      <label htmlFor="appartment">
        Apartamento:
        <input
          type="radio"
          name="homeType"
          value="appartment"
          id="appartment"
          onChange={handleChange}
        />
      </label>
    </fieldset>
  );
}

PersonalFieldset.propTypes = {
  user: PropTypes.object.isRequired,
  setHasError: PropTypes.func.isRequired,
  setPersonalForm: PropTypes.func.isRequired,
};
