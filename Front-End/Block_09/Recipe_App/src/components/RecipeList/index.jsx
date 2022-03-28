import React, { useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';

import {
  fetchAllDrinks,
  fetchAllMeals,
  fetchDrinksCategories,
  fetchMealsCategories,
} from '../../redux/actions/recipeActions';

import RecipeFilterButton from '../Buttons/RecipeFilterButton';
import Card from '../Card';

import { CardContainer, CategoryContainer, Container } from './style';
import CategoryButtons from '../Buttons/RecipeFilterButton/style';
import Loading from '../Loading';

const END = 12;
const END_CAT = 5;

export default function RecipeList() {
  const selectedCategory = useSelector((state) => state.category.category);
  const categories = useSelector((state) => state.recipes.categories);
  const isLoading = useSelector((state) => state.recipes.isLoading);
  const recipes = useSelector((state) => state.recipes);
  const dispatch = useDispatch();

  const { pathname } = useLocation();

  const isItFood = pathname.includes('food');

  const getRecipesCategories = useCallback(() => {
    dispatch(fetchDrinksCategories());
    dispatch(fetchMealsCategories());
  }, [dispatch]);

  useEffect(() => {
    if (isItFood && selectedCategory === '') {
      dispatch(fetchAllMeals());
    } else if (!isItFood && selectedCategory === '') {
      dispatch(fetchAllDrinks());
    }
  }, [dispatch, isItFood, pathname, selectedCategory]);

  useEffect(() => {
    getRecipesCategories();
  }, [getRecipesCategories]);

  return (
    <Container>
      <CategoryContainer>
        <CategoryButtons
          type="button"
          data-testid="All-category-filter"
          onClick={ () => {
            if (isItFood) dispatch(fetchAllMeals());
            else dispatch(fetchAllDrinks());
          } }
        >
          All
        </CategoryButtons>
        {pathname.includes('drinks')
          ? categories.drinks
            .slice(0, END_CAT)
            .map((drink, i) => (
              <RecipeFilterButton key={ i } category={ drink.strCategory } />
            ))
          : categories.meals
            .slice(0, END_CAT)
            .map((meal, i) => (
              <RecipeFilterButton key={ i } category={ meal.strCategory } />
            ))}
      </CategoryContainer>
      {isLoading ? (
        <Loading />
      ) : (
        <CardContainer>
          {pathname.includes('drinks')
            ? recipes.drinks
              .slice(0, END)
              .map((drink, i) => (
                <Card key={ i } index={ i } { ...drink } />
              ))
            : recipes.meals
              .slice(0, END)
              .map((meal, i) => (
                <Card key={ i } index={ i } { ...meal } />
              ))}
        </CardContainer>
      )}
    </Container>
  );
}

RecipeList.propTypes = {
  categorySelected: PropTypes.any,
}.isRequired;
