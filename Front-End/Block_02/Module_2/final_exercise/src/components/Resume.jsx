import React, { Component } from 'react';

export default class Resume extends Component {
  render() {
    const { name, email, cpf, addres, city, resume, cargo, description } =
      this.props;

    return (
      <div>
        <h3>Name</h3>
        <p>{name}</p>
        <h3>Email</h3>
        <p>{email}</p>
        <h3>CPF</h3>
        <p>{cpf}</p>
        <h3>Addres</h3>
        <p>{addres}</p>
        <h3>City</h3>
        <p>{city}</p>
        <h3>Resume</h3>
        <p>{resume}</p>
        <h3>Cargo</h3>
        <p>{cargo}</p>
        <h3>Description</h3>
        <p>{description}</p>
      </div>
    );
  }
}
