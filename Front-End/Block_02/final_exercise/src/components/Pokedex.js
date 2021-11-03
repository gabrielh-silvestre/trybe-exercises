import React from 'react';
import Pokemon from '../Pokemon';

class Pokedex extends React.Component {
  constructor(props) {
    super(props);

    this.state = { index: 0 };
  }

  render() {
    const { pokemons } = this.props;
    const { index } = this.state;

    return (
      <div className="pokedex">
        <Pokemon pokemon={pokemons[index]} />
      </div>
    );
  }
}

export default Pokedex;
