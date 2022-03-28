import React, { useCallback, useEffect } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import {
  fetchRandomDrink,
  fetchRandomFood,
} from '../../redux/actions/recipeActions';

import Header from '../../components/Header/Header';
import SearchBar from '../../components/SearchBar';
import HeaderProvider from '../../contexts/HeaderContext/HeaderProvider';
import Footer from '../../components/footer';

import { Button, ButtonsContainer } from './style';

export default function ExploreFoodsOrDrinks() {
  const recipes = useSelector((state) => state.random);
  const dispatch = useDispatch();

  const history = useHistory();
  const { pathname } = useLocation();

  const itIsFood = pathname.includes('food');

  const getRandomRecipe = useCallback(() => {
    if (itIsFood) {
      dispatch(fetchRandomFood());
    } else {
      dispatch(fetchRandomDrink());
    }
  }, [dispatch, itIsFood]);

  useEffect(() => {
    getRandomRecipe();
  }, [getRandomRecipe]);

  const surpriseClick = async () => {
    if (itIsFood) {
      history.push(`/foods/${recipes.randomMeal[0].idMeal}`);
    } else {
      history.push(`/drinks/${recipes.randomDrink[0].idDrink}`);
    }
  };

  return (
    <>
      <HeaderProvider>
        <Header
          title={ itIsFood ? 'Explore Foods' : 'Explore Drinks' }
          history={ history }
          hasSearch={ false }
        />
        <SearchBar path={ pathname } />
      </HeaderProvider>

      <ButtonsContainer>
        <Button
          type="button"
          data-testid="explore-by-ingredient"
          onClick={ () => {
            history.push(
              `/explore/${itIsFood ? 'foods' : 'drinks'}/ingredients`,
            );
          } }
        >
          By Ingredient
        </Button>
        {itIsFood && (
          <Button
            type="button"
            data-testid="explore-by-nationality"
            onClick={ () => history.push('/explore/foods/nationalities') }
          >
            By Nationality
          </Button>
        )}
        <Button
          type="button"
          data-testid="explore-surprise"
          onClick={ surpriseClick }
        >
          Surprise me!
        </Button>
      </ButtonsContainer>

      <Footer history={ history } />
    </>
  );
}
