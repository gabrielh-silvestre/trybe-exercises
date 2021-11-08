import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

import brazileanStates from '../data/brazilStates';

export default function PersonalFieldset(props) {
  const personalForm = props.user;
  const { userName, userEmail, userCpf, userAddress, userCity, userState } =
    personalForm;

  const { setPersonalForm, setHasError } = props;

  function handleChange({ target: { name, value } }) {
    personalForm[name] = value;

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
          value={userName}
          onChange={handleChange}
        />
      </label>

      <label htmlFor="email">
        Email:
        <input
          type="text"
          name="email"
          id="email"
          value={userEmail}
          onChange={handleChange}
        />
      </label>

      <label htmlFor="cpf">
        CPF:
        <input
          type="text"
          name="cpf"
          id="cpf"
          value={userCpf}
          onChange={handleChange}
        />
      </label>

      <label htmlFor="address">
        Endereço:
        <input
          type="text"
          name="address"
          id="address"
          value={userAddress}
          onChange={handleChange}
        />
      </label>

      <label htmlFor="city">
        Cidade:
        <input
          type="text"
          name="city"
          id="city"
          value={userCity}
          onChange={handleChange}
        />
      </label>

      <label htmlFor="state">
        Estado:
        <select
          type="text"
          name="state"
          id="state"
          value={userState}
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
