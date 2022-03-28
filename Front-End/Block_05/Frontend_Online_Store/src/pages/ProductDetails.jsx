import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { getDetailsProduct } from '../services/api';
import CartButton from '../components/CartButton';
import { getLocalState, setLocalState } from '../services/localStorageServices';
import EvaluationForm from './EvaluationForm';

export default class productDetails extends Component {
  constructor() {
    super();

    this.state = {
      desc: '',
    };
  }

  componentDidMount = () => {
    this.getDescription();
  };

  getDescription = async () => {
    const {
      location: { state: product },
    } = this.props;
    const string = await getDetailsProduct(product.id);
    this.setState({ desc: string.plain_text });
  };

  productContructor = ({ id, title, price, thumbnail, availableQuantity }) => ({
    id,
    title,
    price,
    thumbnail,
    quantity: 1,
    availableQuantity,
  });

  addToCart = () => {
    const {
      location: { state: product },
    } = this.props;
    const productsOnCart = getLocalState('productsOnCart');
    const newProduct = this.productContructor(product);

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
      location: { state: product },
    } = this.props;
    const { desc } = this.state;

    return (
      <section>
        <section>
          <h1 data-testid="product-detail-name">
            {`${product.title} ${product.price}`}
          </h1>
          <p>{desc}</p>
          <button
            onClick={ this.addToCart }
            type="button"
            data-testid="product-detail-add-to-cart"
          >
            Comprar
          </button>
        </section>
        <CartButton />
        <EvaluationForm id={ product.id } />
      </section>
    );
  }
}

productDetails.propTypes = {
  location: PropTypes.instanceOf(Object).isRequired,
};
