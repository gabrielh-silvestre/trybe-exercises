import React from 'react';
import PropTypes from 'prop-types';

import { Link } from 'react-router-dom';

import Container from './style';

export default function RecommendationCard({
  strMealThumb,
  strMeal,
  strDrinkThumb,
  strDrink,
  idMeal,
  idDrink,
  index,
}) {
  return (
    <Container
      data-testid={ `${index}-recomendation-card` }
    >
      <Link to={ idMeal ? `/foods/${idMeal}` : `/drinks/${idDrink}` }>
        <img
          className="w-full"
          data-testid={ `${index}-card-img` }
          src={ strMealThumb || strDrinkThumb }
          alt={ strMeal || strDrink }
        />
      </Link>
    </Container>
  );
}

RecommendationCard.propTypes = {
  strMealThumb: PropTypes.string,
  strMeal: PropTypes.string,
  strDrinkThumb: PropTypes.string,
  strDrink: PropTypes.string,
  idMeal: PropTypes.string,
  idDrink: PropTypes.string,
  index: PropTypes.number,
};

RecommendationCard.defaultProps = {
  strMealThumb: undefined,
  strMeal: undefined,
  strDrinkThumb: undefined,
  strDrink: undefined,
  idMeal: undefined,
  idDrink: undefined,
  index: undefined,
};
