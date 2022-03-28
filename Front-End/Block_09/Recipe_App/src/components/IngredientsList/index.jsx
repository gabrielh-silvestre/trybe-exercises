import PropTypes from 'prop-types';
import React, { useCallback, useEffect, useState } from 'react';
import { Container, ListContainer, ListTitle } from './style';

export default function IngredientsList({ recipeData }) {
  const [ingredients, setIngredients] = useState([]);
  const [measure, setMeasure] = useState([]);

  const getIngredients = useCallback(
    () => {
      const getRecipeDataKeys = Object.keys(recipeData);
      const getIngredientsByKeys = getRecipeDataKeys
        .filter((key) => key.includes('strIngredient') && recipeData[key])
        .map((ing) => recipeData[ing]);
      setIngredients(getIngredientsByKeys);

      const getMeasureByKeys = getRecipeDataKeys
        .filter((key) => key.includes('strMeasure') && recipeData[key])
        .map((mea) => recipeData[mea]);
      setMeasure(getMeasureByKeys);
    },
    [recipeData],
  );

  useEffect(() => {
    getIngredients();
  }, [getIngredients]);

  return (
    <Container>
      <ListTitle>Ingredients</ListTitle>
      <ListContainer>
        {ingredients.map((ingredient, i) => (
          <li
            data-testid={ `${i}-ingredient-name-and-measure` }
            key={ i }
          >
            {measure[i] ? `${ingredient} - ${measure[i]}` : ingredient}
          </li>
        ))}
      </ListContainer>
    </Container>
  );
}

IngredientsList.propTypes = {
  recipeData: PropTypes.objectOf(PropTypes.string).isRequired,
};
