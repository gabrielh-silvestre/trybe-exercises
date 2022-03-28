import React, { useCallback, useEffect } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';

import HeaderProvider from '../../contexts/HeaderContext/HeaderProvider';

import RecipeList from '../../components/RecipeList';
import Header from '../../components/Header/Header';
import SearchBar from '../../components/SearchBar';
import Footer from '../../components/footer';

function ListPage() {
  const recipes = useSelector((state) => state.recipes);
  const selectedCategory = useSelector((state) => state.category.category);

  const { pathname } = useLocation();
  const history = useHistory();

  const isItFood = pathname.includes('food');

  const checkSearchResults = useCallback(() => {
    if (recipes.meals === null || recipes.drinks === null) {
      global.alert('Sorry, we haven\'t found any recipes for these filters.');
    }
    if (recipes.meals.length === 1 && selectedCategory === '') {
      const { idMeal } = recipes.meals[0];
      history.push(`/foods/${idMeal}`);
    } else if (recipes.drinks.length === 1 && selectedCategory === '') {
      const { idDrink } = recipes.drinks[0];
      history.push(`/drinks/${idDrink}`);
    }
  }, [history, recipes, selectedCategory]);

  useEffect(() => {
    checkSearchResults();
  }, [checkSearchResults]);

  return (
    <>
      <HeaderProvider>
        <Header title={ isItFood ? 'Foods' : 'Drinks' } history={ history } hasSearch />
        <SearchBar path={ pathname } />
      </HeaderProvider>
      <RecipeList />
      <Footer history={ history } />
    </>
  );
}

export default ListPage;
