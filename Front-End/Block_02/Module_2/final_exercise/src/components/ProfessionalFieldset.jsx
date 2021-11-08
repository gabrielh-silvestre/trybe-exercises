import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

export default function ProffesionalFieldSet(props) {
  const professionalForm = props.user;
  const { setProfessionalForm, setHasError } = props;

  function handleChange({ target: { name, value } }) {
    setProfessionalForm(() => ({ ...professionalForm, [name]: value }));
  }

  useEffect(() => {
    Object.values(professionalForm).some((item) => item === '')
      ? setHasError(true)
      : setHasError(false);
  });

  return (
    <fieldset>
      <label htmlFor="resume">
        Resumo do currículo:
        <textarea
          name="resume"
          id="resume"
          cols="30"
          rows="10"
          onChange={handleChange}
        ></textarea>
      </label>

      <label htmlFor="role">
        Cargo:
        <input type="text" name="role" id="role " onChange={handleChange} />
      </label>

      <label htmlFor="roleDescription">
        Descrição do cargo:
        <input
          type="text"
          name="roleDescription"
          id="roleDescription"
          onChange={handleChange}
        />
      </label>
    </fieldset>
  );
}

ProffesionalFieldSet.propTypes = {
  user: PropTypes.object.isRequired,
  setHasError: PropTypes.func.isRequired,
  setProfessionalForm: PropTypes.func.isRequired,
};
