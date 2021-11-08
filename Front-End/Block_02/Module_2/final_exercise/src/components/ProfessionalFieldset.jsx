import React from 'react'

export default function ProffesionalFieldSet() {
  return (
    <fieldset>
      <label htmlFor="resume">
        Resumo do currículo:
        <textarea name="resume" id="resume" cols="30" rows="10"></textarea>
      </label>

      <label htmlFor="role">
        Cargo:
        <input type="text" name="role" id="role " />
      </label>

      <label htmlFor="roleDescription">
        Descrição do cargo:
        <input type="text" name="roleDescription" id="roleDescription" />
      </label>
    </fieldset>
  )
}
