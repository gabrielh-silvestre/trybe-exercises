import {
  addFavoriteRecipesOnLocal,
  getLocalStorage,
  removeFavoriteRecipesFromLocal,
} from '../../services/localStorage';

export const ADD_RECIPE_TO_FAVORITE = 'ADD_RECIPE_TO_FAVORITE';
export const REMOVE_RECIPE_FROM_FAVORITE = 'REMOVE_DRINK_FROM_FAVORITE';
export const RECOVERY_RECIPES_FROM_LOCAL_STORAGE = 'RECOVERY_RECIPES_FROM_LOCAL_STORAGE';

export const addRecipeToFavorite = (payload) => {
  const favoriteRecipe = {
    id: payload.idMeal || payload.idDrink,
    type: payload.idMeal ? 'food' : 'drink',
    nationality: payload.strArea || '',
    category: payload.strCategory,
    alcoholicOrNot: payload.strAlcoholic || '',
    name: payload.strMeal || payload.strDrink,
    image: payload.strMealThumb || payload.strDrinkThumb,
  };

  addFavoriteRecipesOnLocal(favoriteRecipe);

  return { type: ADD_RECIPE_TO_FAVORITE, payload: favoriteRecipe };
};

export const removeRecipeFromFavorite = (payload) => {
  const favoriteRecipe = {
    id: payload.idMeal || payload.idDrink,
    type: payload.idMeal ? 'food' : 'drink',
    nationality: payload.strArea || '',
    category: payload.strCategory,
    alcoholicOrNot: payload.strAlcoholic || '',
    name: payload.strMeal || payload.strDrink,
    image: payload.strMealThumb || payload.strDrinkThumb,
  };

  removeFavoriteRecipesFromLocal(payload.id ? payload : favoriteRecipe);

  return {
    type: REMOVE_RECIPE_FROM_FAVORITE,
    payload: payload.id ? payload : favoriteRecipe,
  };
};

export const recoveryFavoriteFromLocalStorage = () => {
  const favoriteRecipes = getLocalStorage('favoriteRecipes');

  return {
    type: RECOVERY_RECIPES_FROM_LOCAL_STORAGE,
    payload: favoriteRecipes || [],
  };
};
