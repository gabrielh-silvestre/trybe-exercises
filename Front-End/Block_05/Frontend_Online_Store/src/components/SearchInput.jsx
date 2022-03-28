import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class SearchInput extends Component {
  render() {
    const { handleClick, handleChange } = this.props;

    return (
      <form onSubmit={ (event) => event.preventDefault() }>
        <label htmlFor="searchInput">
          <input
            type="text"
            name="searchInput"
            id="searchInput"
            onChange={ handleChange }
            data-testid="query-input"
          />
        </label>
        <button
          type="submit"
          onClick={ handleClick }
          data-testid="query-button"
        >
          Pesquisar
        </button>
      </form>
    );
  }
}

SearchInput.propTypes = {
  handleClick: PropTypes.func.isRequired,
  handleChange: PropTypes.func.isRequired,
};
