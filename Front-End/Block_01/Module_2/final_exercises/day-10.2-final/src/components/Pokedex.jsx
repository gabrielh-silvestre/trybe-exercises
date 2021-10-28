import React, { Component } from 'react'
import Pokemon from './Pokemon'
import pokemons from '../data/data';

export default class Pokedex extends Component {
  render() {
    return (
      <article className="flex flex-wrap justify-between w-11/12 mx-auto">
        {pokemons.map((poke) => <Pokemon key={poke.name} pokemon={poke} />)}
      </article>
    )
  }
}
