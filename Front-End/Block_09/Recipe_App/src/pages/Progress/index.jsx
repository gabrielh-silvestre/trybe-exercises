import React, { useCallback, useEffect, useState } from 'react';
import { useLocation, useParams } from 'react-router-dom';

import { getDrinkByIdRecipe, getMealByIdRecipe } from '../../services/api';

import FavoriteButton from '../../components/Buttons/FavoriteButton';
import ShareButton from '../../components/Buttons/ShareButton';
import RecipeSteps from '../../components/RecipeSteps';
import { DetailTitle, Instructions, TitleContainer } from '../Detail/style';
import { ListTitle } from '../../components/IngredientsList/style';
import Container from './style';

export default function Progress() {
  const [recipe, setRecipe] = useState([]);
  const { id } = useParams();
  const { pathname } = useLocation();
  const [shortInstructions, setShortInstructions] = useState(true);

  const getFood = useCallback(async () => {
    if (pathname.includes('food')) {
      const foodData = await getMealByIdRecipe(id);
      setRecipe(foodData || []);
    } else {
      const drinkData = await getDrinkByIdRecipe(id);
      setRecipe(drinkData || []);
    }
  }, [id, pathname]);

  useEffect(() => {
    getFood();
  }, [getFood]);

  return (
    <div>
      {recipe.length !== 0 && (
        <>
          <TitleContainer>
            <DetailTitle data-testid="recipe-title">
              {recipe[0].strDrink || recipe[0].strMeal}
            </DetailTitle>
            <div className="mt-2 flex justify-around">
              <FavoriteButton recipe={ recipe[0] } />
              <ShareButton />
            </div>
          </TitleContainer>
          <Container>
            <img
              src={ recipe[0].strDrinkThumb || recipe[0].strMealThumb }
              alt={ recipe[0].strDrink || recipe[0].strMeal }
              className="w-full rounded-md mb-4"
              data-testid="recipe-photo"
            />
            <p
              className="opacity-50 text-lg mb-2"
              data-testid="recipe-category"
            >
              { recipe[0].strCategory }
            </p>
            <div className="p-4 mb-4 rounded-md bg-white">
              <ListTitle>Instructions</ListTitle>
              <Instructions
                isShort={ shortInstructions }
                data-testid="instructions"
                onClick={ () => {
                  setShortInstructions(!shortInstructions);
                } }
              >
                {recipe[0].strInstructions}
              </Instructions>
            </div>
            <RecipeSteps recipe={ recipe[0] } />
          </Container>
        </>
      )}
    </div>
  );
}
