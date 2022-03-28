import React from 'react';
import PropTypes from 'prop-types';
import { useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import {
  fetchAllDrinks,
  fetchAllMeals,
  fetchFilterDrinkByCategories,
  fetchFilterMealByCategories,
} from '../../../redux/actions/recipeActions';
import { setCategory } from '../../../redux/actions/setCategory';
import CategoryButtons from './style';

export default function RecipeFilterButton({ category }) {
  const selectedCategory = useSelector((state) => state.category.category);
  const dispatch = useDispatch();

  const { pathname } = useLocation();
  const isItFood = pathname.includes('food');

  const setFilter = () => {
    if (isItFood) dispatch(fetchFilterMealByCategories(category));
    else dispatch(fetchFilterDrinkByCategories(category));
    dispatch(setCategory(category));
  };

  const resetFilters = () => {
    if (isItFood) dispatch(fetchAllMeals());
    else dispatch(fetchAllDrinks());
    dispatch(setCategory(''));
  };

  return (
    <CategoryButtons
      type="button"
      data-testid={ `${category}-category-filter` }
      onClick={ category === selectedCategory ? resetFilters : setFilter }
    >
      {category}
    </CategoryButtons>
  );
}

RecipeFilterButton.propTypes = {
  category: PropTypes.string.isRequired,
};
