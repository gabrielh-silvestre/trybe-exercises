import React from 'react';
import Pokemon from '../Pokemon';
import Button from './Button';

class Pokedex extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      index: 0,
      filter: undefined,
    };

    this.nextPokemon = this.nextPokemon.bind(this);
    this.filterByType = this.filterByType.bind(this);
    this.setFilter = this.setFilter.bind(this);
  }

  nextPokemon() {
    const pokemons = this.filterByType();

    this.setState((prevState) => {
      return prevState.index === pokemons.length - 1
        ? { index: 0 }
        : { index: prevState.index + 1 };
    });
  }

  filterByType() {
    const { filter } = this.state;
    const { pokemons } = this.props;

    if (filter) {
      return pokemons.filter((p) => p.type === filter);
    }
    return pokemons;
  }

  setFilter({ target }) {
    this.setState((prevState) => {
      if (prevState.filter === target.innerText) {
        return { filter: undefined, index: 0 };
      }
      return { filter: target.innerText, index: 0 };
    });
  }

  render() {
    const { index } = this.state;

    return (
      <div className="pokedex">
        <Pokemon pokemon={this.filterByType()[index]} />
        <Button callback={this.nextPokemon} btnText="Próximo Pokemon" />

        <div>
          <Button callback={this.setFilter} btnText="Electric" />
          <Button callback={this.setFilter} btnText="Fire" />
          <Button callback={this.setFilter} btnText="Bug" />
          <Button callback={this.setFilter} btnText="Normal" />
          <Button callback={this.setFilter} btnText="Psychic" />
        </div>
      </div>
    );
  }
}

export default Pokedex;
