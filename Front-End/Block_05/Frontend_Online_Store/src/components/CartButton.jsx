import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { getLocalState } from '../services/localStorageServices';

export default class CartButton extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cartTotal: 0,
    };
  }

  componentDidMount() {
    this.getTotal();
    this.eventListener();
  }

  eventListener = () => {
    window.addEventListener('click', () => {
      this.getTotal();
    });
  }

  getTotal = () => {
    const productsOnCart = getLocalState('productsOnCart');

    if (productsOnCart) {
      this.setState({
        cartTotal: productsOnCart.reduce(
          (acc, { quantity }) => acc + quantity,
          0,
        ),
      });
    }
  };

  render() {
    const { cartTotal } = this.state;

    return (
      <Link
        to="/shopping-cart"
        type="submit"
        data-testid="shopping-cart-button"
      >
        <span data-testid="shopping-cart-size">{ cartTotal }</span>
        <span role="img" aria-label="carrinho">🛒</span>
      </Link>
    );
  }
}
