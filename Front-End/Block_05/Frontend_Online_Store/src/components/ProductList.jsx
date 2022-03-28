import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ProductCard from './ProductCard';

export default class ProductList extends Component {
  renderProducts = () => {
    const { allProducts } = this.props;
    return allProducts.map((product) => (
      <ProductCard key={ product.id } product={ product } />
    ));
  };

  render() {
    const { allProducts } = this.props;

    return (
      <article>
        {allProducts.length === 0 ? (
          <p data-testid="home-initial-message">
            Digite algum termo de pesquisa ou escolha uma categoria.
          </p>
        ) : (
          this.renderProducts()
        )}
      </article>
    );
  }
}

ProductList.propTypes = {
  allProducts: PropTypes.instanceOf(Array).isRequired,
};
