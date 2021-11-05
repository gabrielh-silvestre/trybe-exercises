import React, { Component } from 'react';

export default class Resume extends Component {
  render() {
    const { name, email, cpf, address, city, resume, role, roleDescription } =
      this.props.userInfo;

    return (
      <div>
        <h3>Nome</h3>
        <p>{name}</p>
        <h3>Email</h3>
        <p>{email}</p>
        <h3>CPF</h3>
        <p>{cpf}</p>
        <h3>Endereço</h3>
        <p>{address}</p>
        <h3>Cidade</h3>
        <p>{city}</p>
        <h3>Currículo</h3>
        <p>{resume}</p>
        <h3>Cargo</h3>
        <p>{role}</p>
        <h3>Descrição do cargo</h3>
        <p>{roleDescription}</p>
      </div>
    );
  }
}
