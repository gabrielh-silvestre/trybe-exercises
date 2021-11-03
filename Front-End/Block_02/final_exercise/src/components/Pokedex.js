import React from 'react';
import Pokemon from '../Pokemon';
import Button from './Button';

class Pokedex extends React.Component {
  constructor(props) {
    super(props);

    this.state = { index: 0 };

    this.nextPokemon = this.nextPokemon.bind(this);
  }

  nextPokemon() {
    const { pokemons } = this.props;

    this.setState((prevState) => {
      return prevState.index === pokemons.length - 1
        ? { index: 0 }
        : { index: prevState.index + 1 };
    });
  }

  render() {
    const { pokemons } = this.props;
    const { index } = this.state;

    return (
      <div className="pokedex">
        <Pokemon pokemon={pokemons[index]} />
        <Button callback={this.nextPokemon} btnText="Próximo Pokemon" />
      </div>
    );
  }
}

export default Pokedex;
