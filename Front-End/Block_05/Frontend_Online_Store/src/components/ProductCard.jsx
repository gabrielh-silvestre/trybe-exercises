import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { getLocalState, setLocalState } from '../services/localStorageServices';

export default class ProductCard extends Component {
  addToCart = () => {
    const {
      product: {
        id,
        title,
        price,
        thumbnail,
        available_quantity: availableQuantity,
      },
    } = this.props;

    const productsOnCart = getLocalState('productsOnCart');
    const newProduct = {
      id,
      title,
      price,
      thumbnail,
      quantity: 1,
      availableQuantity,
    };

    if (productsOnCart && productsOnCart.length !== 0) {
      const allCartProducts = this.increaseProductQuantity(
        productsOnCart,
        newProduct,
      );
      setLocalState('productsOnCart', allCartProducts);
    } else {
      setLocalState('productsOnCart', [newProduct]);
    }
  };

  increaseProductQuantity = (productsArr, product) => {
    const selectedProduct = productsArr.find(({ id }) => id === product.id);

    if (selectedProduct) {
      selectedProduct.quantity += 1;
      return productsArr;
    }
    return [...productsArr, product];
  };

  render() {
    const {
      product: {
        title,
        price,
        thumbnail,
        shipping: { free_shipping: freeShipping },
      },
    } = this.props;
    const { product } = this.props;

    return (
      <section data-testid="product">
        <div>
          <h2>{title}</h2>
        </div>

        <Link
          key={ product.id }
          to={ {
            pathname: '/product-details',
            state: product,
          } }
          data-testid="product-detail-link"
        >
          <img src={ thumbnail } alt={ title } />
        </Link>

        <div>
          <p>
            R$
            {price.toFixed(2)}
          </p>

          <button
            type="button"
            onClick={ this.addToCart }
            data-testid="product-add-to-cart"
          >
            Comprar
          </button>

          {freeShipping && (
            <div data-testid="free-shipping">Entrega Grátis</div>
          )}
        </div>
      </section>
    );
  }
}

ProductCard.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    thumbnail: PropTypes.string.isRequired,
    available_quantity: PropTypes.number.isRequired,
    shipping: PropTypes.shape({
      free_shipping: PropTypes.bool.isRequired,
    }).isRequired,
  }).isRequired,
};
