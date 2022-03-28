import React, { Component } from 'react';
import Categories from '../components/Categories';
import ProductList from '../components/ProductList';
import CartButton from '../components/CartButton';
import SearchInput from '../components/SearchInput';
import {
  getProductsBySearchTerm,
  getProductsFromCategory,
} from '../services/api';
import '../css/home.css';

export default class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      allProducts: [],
      searchTerm: '',
      selectedCategory: '',
    };
  }

  getFilterCategory = (id) => {
    this.setState({ selectedCategory: id }, () => {
      this.searchByCategory();
    });
  };

  searchByCategory = async () => {
    const { selectedCategory } = this.state;

    const allProducts = await getProductsFromCategory(selectedCategory);
    this.setState({ allProducts });
  };

  getSearchTerm = ({ target: { value } }) => {
    this.setState({ searchTerm: value });
  };

  search = async (event) => {
    event.preventDefault();

    const { searchTerm } = this.state;
    const allProducts = await getProductsBySearchTerm(searchTerm);

    this.setState({ allProducts });
  };

  render() {
    const { allProducts } = this.state;

    return (
      <main>
        <SearchInput
          handleChange={ this.getSearchTerm }
          handleClick={ this.search }
        />
        <ProductList allProducts={ allProducts } />
        <div className="categories-container">
          <Categories handleClick={ this.getFilterCategory } />
        </div>
        <CartButton />
      </main>
    );
  }
}
