import React from 'react';
import PropTypes from 'prop-types';

import brazileanStates from '../data/brazilStates';

export default function PersonalFieldset(props) {
  const personalForm = props.user;
  const { name, email, cpf, address, city, state } = personalForm;
  const { setPersonalForm } = props;

  function handleChange({ target: { name, value } }) {
    setPersonalForm(() => ({ ...personalForm, [name]: value }));
  }

  return (
    <fieldset>
      <label htmlFor="name">
        Nome:
        <input
          type="text"
          name="name"
          id="name"
          value={name}
          onChange={handleChange}
        />
      </label>

      <label htmlFor="email">
        Email:
        <input
          type="text"
          name="email"
          id="email"
          value={email}
          onChange={handleChange}
        />
      </label>

      <label htmlFor="cpf">
        CPF:
        <input
          type="text"
          name="cpf"
          id="cpf"
          value={cpf}
          onChange={handleChange}
        />
      </label>

      <label htmlFor="address">
        Endereço:
        <input
          type="text"
          name="address"
          id="address"
          value={address}
          onChange={handleChange}
        />
      </label>

      <label htmlFor="city">
        Cidade:
        <input
          type="text"
          name="city"
          id="city"
          value={city}
          onChange={handleChange}
        />
      </label>

      <label htmlFor="state">
        Estado:
        <select
          type="text"
          name="state"
          id="state"
          value={state}
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
  setPersonalForm: PropTypes.func.isRequired,
};
