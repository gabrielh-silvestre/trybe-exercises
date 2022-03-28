import React, { useCallback, useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

import { getDrinkRecipe, getMealRecipe } from '../../services/api';

import Carrousel from '../Carrousel';
import RecommendationCard from '../Card/RecomendationCard';

import { ListTitle } from '../IngredientsList/style';

const SLICE_LIMIT = 6;

function RecommendationsList() {
  const [recipes, setRecipes] = useState([]);
  const [recomendationRecipes, setRecomendationRecipes] = useState([]);

  const { pathname } = useLocation();

  const getRecipes = useCallback(async () => {
    if (pathname.includes('foods')) {
      const fetchDrinkRecipes = await getDrinkRecipe();
      const getLimitedDrinks = fetchDrinkRecipes.slice(0, SLICE_LIMIT);
      setRecipes(getLimitedDrinks);
    } else if (pathname.includes('drinks')) {
      const fetchMealRecipes = await getMealRecipe();
      const getLimitedMeals = fetchMealRecipes.slice(0, SLICE_LIMIT);
      setRecipes(getLimitedMeals);
    }
  }, [pathname]);

  const buildRecommendations = useCallback(() => {
    const recomendationArr = [];

    for (let i = 0; i < recipes.length; i += 2) {
      recomendationArr.push([recipes[i], recipes[i + 1]]);
    }

    setRecomendationRecipes(recomendationArr);
  }, [recipes]);

  useEffect(() => {
    getRecipes();
  }, [getRecipes]);

  useEffect(() => {
    buildRecommendations();
  }, [buildRecommendations]);

  return (
    <>
      <ListTitle>Recommended</ListTitle>
      <Carrousel>
        {recomendationRecipes.map(([rec1, rec2], i) => (
          <>
            <RecommendationCard
              key={ rec1.idMeal || rec1.idDrink }
              index={ i }
              { ...rec1 }
            />
            <RecommendationCard
              key={ rec2.idMeal || rec2.idDrink }
              index={ i }
              { ...rec2 }
            />
          </>
        ))}
      </Carrousel>
    </>
  );
}

export default RecommendationsList;
