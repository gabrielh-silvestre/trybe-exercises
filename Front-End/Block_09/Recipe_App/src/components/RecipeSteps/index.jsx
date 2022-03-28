import React, { useState, useEffect, useCallback } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';

import {
  toggleCocktailRecipe,
  toggleMealsRecipe,
} from '../../redux/actions/inProgressActions';
import {
  getLocalStorage,
  toggleInProgressRecipesFromLocal,
} from '../../services/localStorage';

import { RecipeStep, ListContent, Container, Button } from './style';
import { addRecipeToDone } from '../../redux/actions/doneActions';
import { ListContainer, ListTitle } from '../IngredientsList/style';

const INITIAL_STEPS_STATE = {
  igredients: [],
  measure: [],
};

export default function RecipeSteps({ recipe }) {
  const [steps, setSteps] = useState(INITIAL_STEPS_STATE);
  const [completeSteps, setCompleteSteps] = useState({
    id: recipe.idMeal || recipe.idDrink,
    igredients: [],
  });

  const inProgress = useSelector((state) => state.inProgress);
  const dispatch = useDispatch();

  const { pathname } = useLocation();
  const history = useHistory();

  const handleToggleStep = (igredientIndex) => {
    const completeStepsValues = Object.values(completeSteps.igredients);

    if (completeStepsValues.includes(igredientIndex)) {
      setCompleteSteps({
        ...completeSteps,
        igredients: completeStepsValues.filter(
          (ingredient) => ingredient !== igredientIndex,
        ),
      });
    } else {
      setCompleteSteps({
        ...completeSteps,
        igredients: [...completeStepsValues, igredientIndex],
      });
    }
  };

  const finishRecipe = () => {
    dispatch(addRecipeToDone(recipe));
    history.push('/done-recipes');
  };

  const saveStep = useCallback(() => {
    if (pathname.includes('food')) {
      dispatch(toggleMealsRecipe(completeSteps));
    } else {
      dispatch(toggleCocktailRecipe(completeSteps));
    }
  }, [pathname, completeSteps, dispatch]);

  const buildSteps = useCallback(() => {
    const recipeArray = Object.values(recipe);

    const newSteps = recipeArray.reduce(
      (acc, _, i) => {
        const recipeIgredient = recipe[`strIngredient${i}`];
        const recipeMeasure = recipe[`strMeasure${i}`];

        if (
          (recipeIgredient && recipeIgredient !== '')
          || (recipeMeasure && recipeMeasure !== '')
        ) {
          acc.igredients.push(recipeIgredient);
          acc.measure.push(recipeMeasure);
        }

        return acc;
      },
      { igredients: [], measure: [] },
    );

    setSteps(newSteps);
  }, [recipe]);

  const recoveryInProgress = useCallback((type) => {
    const inProgressLocal = getLocalStorage('inProgressRecipes');

    if (inProgressLocal) {
      setCompleteSteps((prevCompleteSteps) => ({
        ...prevCompleteSteps,
        igredients: inProgressLocal[type][prevCompleteSteps.id] || [],
      }));
    }
  }, []);

  useEffect(() => {
    if (pathname.includes('food')) {
      recoveryInProgress('meals');
    } else {
      recoveryInProgress('cocktails');
    }
  }, [pathname, recoveryInProgress]);

  useEffect(() => {
    buildSteps();
  }, [buildSteps]);

  useEffect(() => {
    saveStep();
  }, [saveStep]);

  useEffect(() => {
    toggleInProgressRecipesFromLocal(inProgress);
  }, [inProgress]);

  const { igredients } = completeSteps;

  return (
    <Container>
      <ListContainer>
        <ListTitle>Ingredients</ListTitle>
        <ListContent>
          {steps.igredients.map((igredient, i) => (
            <RecipeStep
              key={ i }
              htmlFor={ igredient }
              isMarked={ igredients.includes(i) }
              data-testid={ `${i}-ingredient-step` }
            >
              {`${igredient} - ${steps.measure[i]}`}
              <input
                className="ml-1"
                type="checkbox"
                id={ igredient }
                name={ igredient }
                checked={ igredients.includes(i) }
                value={ `igredient - ${steps.measure[i]}` }
                onChange={ () => {
                  handleToggleStep(i);
                } }
              />
            </RecipeStep>
          ))}
        </ListContent>
      </ListContainer>
      <Button
        type="button"
        disabled={ steps.igredients.length !== igredients.length }
        data-testid="finish-recipe-btn"
        style={ { positon: 'absolute', bottom: '0' } }
        onClick={ finishRecipe }
      >
        Finish Recipe
      </Button>
    </Container>
  );
}

RecipeSteps.propTypes = {
  recipe: PropTypes.shape({
    idMeal: PropTypes.string,
    idDrink: PropTypes.string,
  }),
};

RecipeSteps.defaultProps = {
  recipe: {
    idMeal: undefined,
    idDrink: undefined,
  },
};
