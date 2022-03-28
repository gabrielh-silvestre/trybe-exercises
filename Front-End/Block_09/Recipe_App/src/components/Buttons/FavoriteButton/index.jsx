import React, { useCallback, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import PropTypes from 'prop-types';

import {
  addRecipeToFavorite,
  recoveryFavoriteFromLocalStorage,
  removeRecipeFromFavorite,
} from '../../../redux/actions/favoriteActions';

import blackHeartIcon from '../../../images/blackHeartIcon.svg';
import whiteHeartIcon from '../../../images/whiteHeartIcon.svg';

export default function FavoriteButton({ recipe, testid, blackHeartClass }) {
  const dispatch = useDispatch();
  const favoriteRecipes = useSelector((state) => state.favorites.favoriteRecipes);

  const checkFavorites = () => {
    const { idMeal, idDrink } = recipe;
    const { id } = recipe;

    if (id) {
      return (
        favoriteRecipes.some((meal) => meal.id === id)
        || favoriteRecipes.some((drink) => drink.id === id)
      );
    }

    return (
      favoriteRecipes.some((meal) => meal.id === idMeal)
      || favoriteRecipes.some((drink) => drink.id === idDrink)
    );
  };

  const handleAddToFavorites = () => {
    dispatch(addRecipeToFavorite({ ...recipe }));
  };

  const handleRemoveFromFavorites = () => {
    dispatch(removeRecipeFromFavorite({ ...recipe }));
  };

  const recoveryFavorites = useCallback(() => {
    dispatch(recoveryFavoriteFromLocalStorage());
  }, [dispatch]);

  useEffect(() => {
    recoveryFavorites();
  }, [recoveryFavorites]);

  return (
    <div>
      {checkFavorites() ? (
        <button type="button" onClick={ handleRemoveFromFavorites }>
          <img
            src={ blackHeartIcon }
            alt="black heart icon"
            data-testid={ testid }
            className={ blackHeartClass }
          />
        </button>
      ) : (
        <button type="button" onClick={ handleAddToFavorites }>
          <img
            src={ whiteHeartIcon }
            alt="white heart icon"
            data-testid={ testid }
          />
        </button>
      )}
    </div>
  );
}

FavoriteButton.propTypes = {
  recipe: PropTypes.shape({
    idMeal: PropTypes.string,
    idDrink: PropTypes.string,
    id: PropTypes.string,
  }),

  testid: PropTypes.string,
  blackHeartClass: PropTypes.string,
};

FavoriteButton.defaultProps = {
  recipe: {
    idMeal: undefined,
    idDrink: undefined,
    id: undefined,
  },

  testid: 'favorite-btn',
  blackHeartClass: '',
};
