import React from 'react';
import { useDispatch } from 'react-redux';
import { useHistory, useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';

import { setCategory } from '../../redux/actions/setCategory';
import {
  fetchDrinksWithOptions,
  fetchMealsWithOptions,
} from '../../redux/actions/recipeActions';
import { CardTitle, Container } from './style';

export default function Card({
  strMealThumb,
  strMeal,
  idMeal,
  strDrinkThumb,
  strDrink,
  idDrink,
  index,
  isIngredient,
  ingredient,
}) {
  const dispatch = useDispatch();
  const { pathname } = useLocation();
  const history = useHistory();

  const isItFood = pathname.includes('food');

  const redirectToDetailPage = () => {
    if (isIngredient) {
      dispatch(setCategory(strMeal || strDrink));
      if (isItFood) dispatch(fetchMealsWithOptions('INGR', ingredient));
      else dispatch(fetchDrinksWithOptions('INGR', ingredient));
      history.push(isItFood ? '/foods' : '/drinks');
    } else {
      history.push(idMeal ? `/foods/${idMeal}` : `/drinks/${idDrink}`);
    }
  };

  const typeCard = () => {
    if (isIngredient) {
      return `${index}-ingredient-card`;
    }
    return `${index}-recipe-card`;
  };

  return (
    <Container
      type="button"
      onClick={ redirectToDetailPage }
      data-testid={ typeCard() }
    >
      <img
        data-testid={ `${index}-card-img` }
        src={ strMealThumb || strDrinkThumb }
        alt={ strMeal || strDrink }
      />
      <CardTitle data-testid={ `${index}-card-name` }>{strMeal || strDrink}</CardTitle>
    </Container>
  );
}

Card.propTypes = {
  strMealThumb: PropTypes.string,
  strMeal: PropTypes.string,
  idMeal: PropTypes.string,
  strDrinkThumb: PropTypes.string,
  strDrink: PropTypes.string,
  idDrink: PropTypes.string,
  index: PropTypes.number,
  isIngredient: PropTypes.bool,
  ingredient: PropTypes.string,
};

Card.defaultProps = {
  strMealThumb: undefined,
  strMeal: undefined,
  idMeal: undefined,
  strDrinkThumb: undefined,
  strDrink: undefined,
  idDrink: undefined,
  index: undefined,
  isIngredient: false,
  ingredient: undefined,
};
