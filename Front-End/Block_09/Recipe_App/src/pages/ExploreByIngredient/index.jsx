import React, { useEffect } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import Header from '../../components/Header/Header';
import SearchBar from '../../components/SearchBar';
import HeaderProvider from '../../contexts/HeaderContext/HeaderProvider';
import Footer from '../../components/footer';
import { fetchOnlyIngredients } from '../../redux/actions/recipeActions';
import Container from './style';
import ExploreCard from '../../components/Card/ExploreCard';
import Loading from '../../components/Loading';

const END = 12;
const MEAL_URL = (ingredient) => `https://www.themealdb.com/images/ingredients/${ingredient}-Small.png`;
const DRINK_URL = (ingredient) => `https://www.thecocktaildb.com/images/ingredients/${ingredient}-Small.png`;

export default function ExploreByIngredient() {
  const dispatch = useDispatch();
  const ingredients = useSelector((state) => state.ingredients.ingredients);
  const isLoading = useSelector((state) => state.ingredients.isLoading);

  const { pathname } = useLocation();
  const history = useHistory();

  useEffect(() => {
    dispatch(fetchOnlyIngredients(pathname));
  }, [dispatch, pathname]);

  return (
    <>
      <HeaderProvider>
        <Header title="Explore Ingredients" history={ history } hasSearch={ false } />
        <SearchBar path={ pathname } />
      </HeaderProvider>

      {isLoading ? <Loading /> : (
        <Container>
          {ingredients.meals.length > 0 ? ingredients.meals.slice(0, END).map((e, i) => (
            <ExploreCard
              key={ i }
              index={ i }
              isIngredient
              history={ history }
              strMealThumb={ MEAL_URL(e.strIngredient) }
              strMeal={ e.strIngredient }
              ingredient={ e.strIngredient }
            />
          ))
            : ingredients.drinks.slice(0, END).map((e, i) => (
              <ExploreCard
                key={ i }
                index={ i }
                isIngredient
                history={ history }
                strDrinkThumb={ DRINK_URL(e.strIngredient1) }
                strDrink={ e.strIngredient1 }
                ingredient={ e.strIngredient1 }
              />
            ))}
        </Container>
      )}

      <Footer history={ history } />
    </>
  );
}
