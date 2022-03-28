import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class ShoppingCard extends Component {
  constructor(props) {
    super(props);

    const { product } = this.props;
    this.state = {
      product,
    };
  }

  render() {
    const {
      product: { id, title, price, quantity, thumbnail },
    } = this.state;
    const { handleClick } = this.props;

    return (
      <section>
        <div>
          <img src={ thumbnail } alt={ title } />
        </div>

        <div>
          <h3 data-testid="shopping-cart-product-name">{title}</h3>
          <p>{price}</p>
        </div>

        <div data-testid="shopping-cart-product-quantity">
          <p>{quantity}</p>
        </div>

        <div>
          <button
            onClick={ () => handleClick[0](id, quantity) }
            type="button"
            data-testid="product-increase-quantity"
          >
            +
          </button>
          <button
            onClick={ () => handleClick[1](id, quantity) }
            type="button"
            data-testid="product-decrease-quantity"
          >
            -
          </button>
          <button onClick={ () => handleClick[2](id) } type="button">
            X
          </button>
        </div>
      </section>
    );
  }
}

ShoppingCard.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    thumbnail: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    quantity: PropTypes.number.isRequired,
  }).isRequired,
  handleClick: PropTypes.instanceOf(Array).isRequired,
};
