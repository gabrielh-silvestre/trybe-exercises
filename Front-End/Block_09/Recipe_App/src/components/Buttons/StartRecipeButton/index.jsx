import React, { useCallback, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';

import { getLocalStorage } from '../../../services/localStorage';
import { recoveryDoneRecipesFromLocalStorage } from '../../../redux/actions/doneActions';

function StartRecipeButton({ id }) {
  const [inProgressRecipe, setInProgressRecipe] = useState(false);
  const doneRecipes = useSelector((state) => state.doneRecipes);
  const dispatch = useDispatch();

  const { pathname } = useLocation();
  const history = useHistory();
  const getInProgressRecipes = getLocalStorage('inProgressRecipes');

  const isDoneRecipe = () => doneRecipes.some((recipe) => recipe.id === id);

  const checkInProgressRecipes = useCallback(() => {
    const mealsOrCocktails = () => (pathname.includes('foods')
      ? getInProgressRecipes.meals
      : getInProgressRecipes.cocktails);

    if (getInProgressRecipes) {
      setInProgressRecipe(
        Object.keys(mealsOrCocktails()).some((key) => key === id),
      );
    }
  }, [getInProgressRecipes, id, pathname]);

  function startRecipe() {
    if (pathname.includes('foods')) {
      history.push(`/foods/${id}/in-progress`);
    } else if (pathname.includes('drinks')) {
      history.push(`/drinks/${id}/in-progress`);
    }
  }

  useEffect(() => {
    checkInProgressRecipes();
  }, [checkInProgressRecipes]);

  useEffect(() => {
    dispatch(recoveryDoneRecipesFromLocalStorage());
  }, [dispatch]);

  return (
    <div>
      {!isDoneRecipe() && (
        <button
          data-testid="start-recipe-btn"
          className="fixed bottom-0 w-full h-10 font-bold text-white bg-details"
          type="button"
          onClick={ startRecipe }
        >
          {inProgressRecipe ? 'Continue Recipe' : 'Start Recipe'}
        </button>
      )}
    </div>
  );
}

StartRecipeButton.propTypes = {
  id: PropTypes.string.isRequired,
};

export default StartRecipeButton;
