import {
  getMealByFirstLetterRecipe,
  getMealByIngredientRecipe,
  getMealRecipe,
  getDrinkByFirstLetterRecipe,
  getDrinkByIngredientRecipe,
  getDrinkRecipe,
  getRandomMeal,
  getRandomDrink,
} from '../services/api';

export const SEARCH_MEALS_OPTIONS_FUNCTIONS = {
  INGR: (searchIngredient) => getMealByIngredientRecipe(searchIngredient),
  NAME: (searchName) => getMealRecipe(searchName),
  FIRSTL: (searchLetter) => getMealByFirstLetterRecipe(searchLetter),
  RANDOM: () => getRandomMeal(),
};

export const SEARCH_DRINK_OPTIONS_FUNCTIONS = {
  INGR: (searchIngredient) => getDrinkByIngredientRecipe(searchIngredient),
  NAME: (searchName) => getDrinkRecipe(searchName),
  FIRSTL: (searchLetter) => getDrinkByFirstLetterRecipe(searchLetter),
  RANDOM: () => getRandomDrink(),
};
