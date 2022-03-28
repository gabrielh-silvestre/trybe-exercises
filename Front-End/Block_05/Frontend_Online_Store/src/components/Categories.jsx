import React from 'react';
import PropTypes from 'prop-types';
import { getCategories } from '../services/api';
import '../css/categories.css';

class Categories extends React.Component {
  constructor() {
    super();
    this.state = {
      categories: [],
    };
  }

  getCategoriesNow = async () => {
    const categoriesReceived = await getCategories();

    this.setState({ categories: categoriesReceived });
  };

  componentDidMount = () => {
    this.getCategoriesNow();
  };

  render() {
    const { categories } = this.state;
    const { handleClick } = this.props;

    return (
      <div className="categories-container">
        <h3>categorias</h3>
        {categories.map(({ id, name }) => (
          <button
            key={ id }
            type="button"
            onClick={ () => handleClick(id) }
            data-testid="category"
          >
            {name}
          </button>
        ))}
      </div>
    );
  }
}

Categories.propTypes = {
  handleClick: PropTypes.func.isRequired,
};

export default Categories;
