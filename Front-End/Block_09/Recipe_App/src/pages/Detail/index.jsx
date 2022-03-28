import React, { useCallback, useEffect, useState } from 'react';
import { useParams, useLocation } from 'react-router-dom';

import { getDrinkByIdRecipe, getMealByIdRecipe } from '../../services/api';

import FavoriteButton from '../../components/Buttons/FavoriteButton';
import ShareButton from '../../components/Buttons/ShareButton';
import StartRecipeButton from '../../components/Buttons/StartRecipeButton';
import IngredientsList from '../../components/IngredientsList';
import YoutubeEmbed from '../../components/YoutubeEmbed';
import RecommendationsList from '../../components/RecommendationsList';

import { Container, DetailTitle, Instructions, TitleContainer } from './style';
import { ListTitle } from '../../components/IngredientsList/style';
import Loading from '../../components/Loading';

function Detail() {
  const [recipeData, setRecipeData] = useState({});
  const [shortInstructions, setShortInstructions] = useState(true);
  const { id } = useParams();
  const { pathname } = useLocation();
  const [isLoading, setIsLoading] = useState(false);

  const isItFood = pathname.includes('food');

  const getRecipe = useCallback(async () => {
    setIsLoading(true);
    if (!isItFood) {
      const fetchDrink = await getDrinkByIdRecipe(id);
      setRecipeData(fetchDrink[0]);
    } else {
      const fetchFood = await getMealByIdRecipe(id);
      setRecipeData(fetchFood[0]);
    }
    setIsLoading(false);
  }, [id, isItFood]);

  useEffect(() => {
    getRecipe();
  }, [getRecipe]);

  if (isLoading) {
    return (
      <Loading />
    );
  }

  return (
    <main>
      {recipeData && (
        <>
          <TitleContainer>
            <DetailTitle data-testid="recipe-title">
              {recipeData.strMeal || recipeData.strDrink}
            </DetailTitle>
            <div className="mt-2 flex justify-around">
              <ShareButton />
              <FavoriteButton recipe={ recipeData } />
            </div>
          </TitleContainer>

          <Container>
            <section>
              <img
                data-testid="recipe-photo"
                src={ recipeData.strMealThumb || recipeData.strDrinkThumb }
                className="w-full rounded-md mb-4"
                alt="Recipe"
              />

              <p
                className="opacity-50 text-lg mb-2"
                data-testid="recipe-category"
              >
                {pathname.includes('foods')
                  ? recipeData.strCategory
                  : recipeData.strAlcoholic}
              </p>

              <IngredientsList recipeData={ recipeData } />

              <div className="p-4 mb-4 rounded-md bg-white">
                <ListTitle>Instructions</ListTitle>
                <Instructions
                  isShort={ shortInstructions }
                  data-testid="instructions"
                  onClick={ () => {
                    setShortInstructions(!shortInstructions);
                  } }
                >
                  {recipeData.strInstructions}
                </Instructions>
              </div>

              {recipeData.strYoutube && (
                <div className="p-4 mb-4 rounded-md bg-white">
                  <ListTitle>Video</ListTitle>
                  <YoutubeEmbed url={ recipeData.strYoutube } />
                </div>
              )}
            </section>

          </Container>
          <RecommendationsList />
          <StartRecipeButton id={ recipeData.idDrink || recipeData.idMeal } />
        </>
      )}
    </main>
  );
}

export default Detail;
