import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ShoppingCard from './ShoppingCard';

export default class ShoppingList extends Component {
  render() {
    const { products, handleClick } = this.props;

    return (
      <article>
        {products.map((product) => (
          <ShoppingCard
            key={ product.id }
            product={ product }
            handleClick={ handleClick }
          />
        ))}
      </article>
    );
  }
}

ShoppingList.propTypes = {
  products: PropTypes.instanceOf(Array).isRequired,
  handleClick: PropTypes.instanceOf(Array).isRequired,
};
