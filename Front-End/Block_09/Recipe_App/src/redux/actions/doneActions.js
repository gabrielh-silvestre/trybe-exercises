import {
  addDoneRecipesOnLocal,
  getLocalStorage,
  removeDoneRecipesFromLocal,
} from '../../services/localStorage';

export const ADD_RECIPE_TO_DONE = 'ADD_RECIPE_TO_DONE';
export const REMOVE_RECIPE_FROM_DONE = 'REMOVE_RECIPE_FROM_DONE';
export const RECOVERY_DONE_FROM_LOCAL_STORAGE = 'RECOVERY_DONE_FROM_LOCAL_STORAGE';

export const addRecipeToDone = (payload) => {
  const date = new Date();

  const doneRecipe = {
    id: payload.idMeal || payload.idDrink,
    type: payload.idMeal ? 'food' : 'drink',
    nationality: payload.strArea || '',
    category: payload.strCategory,
    alcoholicOrNot: payload.strAlcoholic || '',
    name: payload.strMeal || payload.strDrink,
    image: payload.strMealThumb || payload.strDrinkThumb,
    doneDate: `${date.getDate()}/${date.getMonth()}/${date.getFullYear()}`,
    tags: payload.strTags ? payload.strTags.split(',') : [],
  };

  addDoneRecipesOnLocal(doneRecipe);

  return { type: ADD_RECIPE_TO_DONE, payload: doneRecipe };
};

export const removeRecipeFromDone = (payload) => {
  const doneRecipe = {
    id: payload.idMeal || payload.idDrink,
  };

  removeDoneRecipesFromLocal(payload.id ? payload : doneRecipe);

  return {
    type: REMOVE_RECIPE_FROM_DONE,
    payload: payload.id ? payload : doneRecipe,
  };
};

export const recoveryDoneRecipesFromLocalStorage = () => {
  const doneRecipes = getLocalStorage('doneRecipes');

  return {
    type: RECOVERY_DONE_FROM_LOCAL_STORAGE,
    payload: doneRecipes || [],
  };
};
