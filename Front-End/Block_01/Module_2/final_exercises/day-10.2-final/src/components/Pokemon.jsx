import React, { Component } from 'react'

export default class Pokemon extends Component {
  render() {
    const { name, type, averageWeight, image } = this.props.pokemon;

    return (
      <section>
        <div>
          <p>{name}</p>
          <p>{type}</p>
          <p>{`${averageWeight.value} ${averageWeight.measurementUnit}`}</p>
        </div>

        <div>
          <img src={image} alt={name} />
        </div>
      </section>
    )
  }
}
