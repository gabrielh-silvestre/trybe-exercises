import React, { useContext, useState } from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';

import {
  fetchMealsWithOptions,
  fetchDrinksWithOptions,
} from '../../redux/actions/recipeActions';

import HeaderContext from '../../contexts/HeaderContext/HeaderContext';
import Input from '../Input';

import { Container, SearchButton, SearchForm } from './style';

export default function SearchBar({ path }) {
  const [searchOption, setSearchOption] = useState('');
  const [searchTerm, setSearchTerm] = useState('');
  const { showSearchBar } = useContext(HeaderContext);
  const dispatch = useDispatch();

  const handleSearchOptionChange = ({ target: { value } }) => {
    setSearchOption(value);
  };

  const handleSearchTermChange = ({ target: { value } }) => {
    setSearchTerm(value);
  };

  const foodOrDrink = () => {
    if (path.includes('food')) {
      dispatch(fetchMealsWithOptions(searchOption, searchTerm));
    } else {
      dispatch(fetchDrinksWithOptions(searchOption, searchTerm));
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (searchOption === 'FIRSTL' && searchTerm.length > 1) {
      global.alert('Your search must have only 1 (one) character');
    } else {
      foodOrDrink();
    }
    setSearchOption('');
    setSearchTerm('');
  };

  return (
    showSearchBar && (
      <Container>
        <SearchForm onSubmit={ handleSubmit }>
          <Input
            type="text"
            name="searchTerm"
            value={ searchTerm }
            placeHolder="Search..."
            onChange={ handleSearchTermChange }
            testid="search-input"
            className="row-span-1 w-full h-7 px-2 rounded-md"
          />
          <fieldset className="flex justify-around items-center">
            <Input
              type="radio"
              label="Ingredient"
              name="searchOption"
              value="INGR"
              checked={ searchOption === 'INGR' }
              onChange={ handleSearchOptionChange }
              testid="ingredient-search-radio"
            />
            <Input
              type="radio"
              label="Name"
              name="searchOption"
              value="NAME"
              checked={ searchOption === 'NAME' }
              onChange={ handleSearchOptionChange }
              testid="name-search-radio"
            />
            <Input
              type="radio"
              label="First Letter"
              name="searchOption"
              value="FIRSTL"
              checked={ searchOption === 'FIRSTL' }
              onChange={ handleSearchOptionChange }
              testid="first-letter-search-radio"
            />
          </fieldset>
          <SearchButton type="submit" data-testid="exec-search-btn">
            Search
          </SearchButton>
        </SearchForm>
      </Container>
    )
  );
}

SearchBar.propTypes = {
  path: PropTypes.string.isRequired,
};
