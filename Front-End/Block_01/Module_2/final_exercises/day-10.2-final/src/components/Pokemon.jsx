import React, { Component } from 'react';

export default class Pokemon extends Component {
  render() {
    const { name, type, averageWeight, image } = this.props.pokemon;

    return (
      <section className="inline-block m-4 py-2 px-8 shadow-md rounded-xl bg-gray-50">
        <div className="flex justify-between items-center">
          <div className="w-20">
            <p>{name}</p>
            <p>{type}</p>
            <p>{`${averageWeight.value} ${averageWeight.measurementUnit}`}</p>
          </div>

          <div>
            <img src={image} alt={name} />
          </div>
        </div>
      </section>
    );
  }
}
