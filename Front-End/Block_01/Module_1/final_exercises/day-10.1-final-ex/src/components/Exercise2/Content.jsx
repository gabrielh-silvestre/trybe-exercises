import React, { Component } from 'react';

export default class Content extends Component {
  constructor(props) {
    super(props);

    this.state = {
      conteudos: [
        {
          conteudo: 'High Order Functions',
          bloco: 8,
          status: 'Aprendido',
        },
        {
          conteudo: 'Composicao de Componentes',
          bloco: 11,
          status: 'Aprendendo',
        },
        {
          conteudo: 'Composicao de Estados',
          bloco: 12,
          status: 'Aprenderei',
        },
        {
          conteudo: 'Redux',
          bloco: 16,
          status: 'Aprenderei',
        },
      ],
    };

    this.renderContent = this.renderContent.bind(this);
  }

  renderContent() {
    const { conteudos } = this.state;

    return conteudos.map(({ conteudo, bloco, status }, i) => (
        <section key={i}>
          <p>O conteúdo é: {conteudo}</p>
          <p>Status: {status}</p>
          <p>Bloco: {bloco}</p>
        </section>
      )
    );
  }

  render() {
    return <>{this.renderContent()}</>;
  }
}
