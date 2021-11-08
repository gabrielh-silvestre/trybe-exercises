import React from 'react';
import PropTypes from 'prop-types';

export default function ProffesionalFieldSet(props) {
  const professionalForm = props.user;
  const { resume, role, roleDescription } = professionalForm;
  const { setProfessionalForm } = props;

  function handleChange({ target: { name, value } }) {
    setProfessionalForm(() => ({ ...professionalForm, [name]: value }));
  }

  return (
    <fieldset>
      <label htmlFor="resume">
        Resumo do currículo:
        <textarea
          name="resume"
          id="resume"
          cols="30"
          rows="10"
          value={resume}
          onChange={handleChange}
        ></textarea>
      </label>

      <label htmlFor="role">
        Cargo:
        <input
          type="text"
          name="role"
          id="role"
          value={role}
          onChange={handleChange}
        />
      </label>

      <label htmlFor="roleDescription">
        Descrição do cargo:
        <input
          type="text"
          name="roleDescription"
          id="roleDescription"
          value={roleDescription}
          onChange={handleChange}
        />
      </label>
    </fieldset>
  );
}

ProffesionalFieldSet.propTypes = {
  user: PropTypes.object.isRequired,
  setProfessionalForm: PropTypes.func.isRequired,
};
