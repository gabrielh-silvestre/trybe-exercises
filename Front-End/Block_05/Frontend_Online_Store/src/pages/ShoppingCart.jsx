import React, { Component } from 'react';
import { Redirect } from 'react-router';
import ShoppingList from '../components/ShoppingList';
import { getLocalState, setLocalState } from '../services/localStorageServices';

class ShoppingCart extends Component {
  constructor(props) {
    super(props);

    this.state = {
      productsOnCart: [],
      cartTotal: 0,
      redirect: false,
    };
  }

  componentDidMount() {
    this.getProductsOnCart();
  }

  componentDidUpdate(_, prevState) {
    const { productsOnCart } = this.state;

    if (prevState.productsOnCart.length !== productsOnCart.length) {
      this.getTotal();
    }

    setLocalState('productsOnCart', productsOnCart);
  }

  getProductsOnCart = () => {
    const productsOnCart = getLocalState('productsOnCart');

    if (productsOnCart) this.setState({ productsOnCart });
  };

  getTotal = () => {
    const { productsOnCart } = this.state;

    this.setState({
      cartTotal: productsOnCart.reduce(
        (acc, { price, quantity }) => acc + price * quantity,
        0,
      ),
    });
  };

  increaseQuantity = (id, quantity) => {
    const { productsOnCart } = this.state;
    const attArray = productsOnCart.map((product) => {
      if (product.id === id && quantity < product.availableQuantity) {
        product.quantity = quantity + 1;
      }
      return product;
    });

    this.setState({ productsOnCart: attArray }, () => this.getTotal());
  };

  decreaseQuantity = (id, quantity) => {
    const { productsOnCart } = this.state;
    const attArray = productsOnCart.map((product) => {
      if (product.id === id && quantity !== 0) {
        product.quantity = quantity - 1;
      }
      return product;
    });

    this.setState({ productsOnCart: attArray }, () => this.getTotal());
  };

  removeItem = (id) => {
    const { productsOnCart } = this.state;
    const attArray = productsOnCart.filter((product) => product.id !== id);

    this.setState({ productsOnCart: attArray }, () => this.getTotal());
  };

  buttonClick = () => {
    this.setState({ redirect: true });
  };

  render() {
    const { productsOnCart, cartTotal, redirect } = this.state;
    return productsOnCart.length === 0 ? (
      <p data-testid="shopping-cart-empty-message">Seu carrinho está vazio</p>
    ) : (
      <article>
        <ShoppingList
          products={ productsOnCart }
          handleClick={ [
            this.increaseQuantity,
            this.decreaseQuantity,
            this.removeItem,
          ] }
        />
        <h4>{`Total: ${cartTotal}`}</h4>
        {!redirect ? (
          <button
            data-testid="checkout-products"
            type="submit"
            onClick={ this.buttonClick }
          >
            Finalizar Compra
          </button>
        ) : (
          <Redirect to="/checkout" />
        )}
      </article>
    );
  }
}

export default ShoppingCart;
