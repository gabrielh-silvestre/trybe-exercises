import React from 'react';
import brazileanStates from '../data/brazilStates';
import PropTypes from 'prop-types';

export default function Fieldset(props) {
  const {
    userName,
    userEmail,
    userCpf,
    userAddress,
    userCity,
    userState,
    handleChange,
  } = props.user;

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

      <label htmlFor="State">
        Estado:
        <select
          type="text"
          name="State"
          id="State"
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

Fieldset.propTypes = {
  userAddress: PropTypes.string.isRequired,
  userCity: PropTypes.string.isRequired,
  userCpf: PropTypes.string.isRequired,
  userEmail: PropTypes.string.isRequired,
  userName: PropTypes.string.isRequired,
  userState: PropTypes.string.isRequired,
};
