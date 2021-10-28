import React, { Component } from 'react'
import Pokemon from './Pokemon'
import pokemons from '../data/data';

export default class Pokedex extends Component {
  render() {
    return (
      <article>
        {pokemons.map((poke) => <Pokemon pokemon={poke} />)}
      </article>
    )
  }
}
