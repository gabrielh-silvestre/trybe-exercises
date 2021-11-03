import React from 'react';
import Pokemon from '../Pokemon';
import Button from './Button';

class Pokedex extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      filteredPokemons: this.props.pokemons,
      index: 0,
      filter: undefined,
      isAble: false,
    };

    this.nextPokemon = this.nextPokemon.bind(this);
    this.filterByType = this.filterByType.bind(this);
    this.setFilter = this.setFilter.bind(this);
  }

  nextPokemon() {
    const { filteredPokemons } = this.state;

    this.setState((prevState) => {
      return prevState.index === filteredPokemons.length - 1
        ? { index: 0 }
        : { index: prevState.index + 1 };
    });
  }

  filterByType() {
    const { filter } = this.state;
    const { pokemons } = this.props;

    if (filter) {
      this.setState({
        filteredPokemons: pokemons.filter((p) => p.type === filter),
        isAble: pokemons.filter((p) => p.type === filter).length === 1,
      });
    } else {
      this.setState({ filteredPokemons: this.props.pokemons, isAble: false });
    }
  }

  setFilter({ target }) {
    this.setState((prevState) =>
      prevState.filter === target.innerText
        ? { filter: undefined, index: 0 }
        : { filter: target.innerText, index: 0 }
    );
  }

  componentDidUpdate(_, prevState) {
    const { filter } = this.state;

    if (prevState.filter !== filter) {
      this.filterByType();
    }
  }

  render() {
    const { index, isAble, filteredPokemons } = this.state;

    return (
      <div className="pokedex">
        <Pokemon pokemon={filteredPokemons[index]} />
        <Button
          able={isAble}
          callback={this.nextPokemon}
          btnText="Próximo Pokemon"
        />

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
