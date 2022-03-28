export const TOGGLE_MEALS_RECIPE = 'TOGGLE_MEALS_RECIPE';

export const TOGGLE_COCKTAILS_RECIPE = 'TOGGLE_COCKTAILS_RECIPE';

export const toggleMealsRecipe = (payload) => ({
  type: TOGGLE_MEALS_RECIPE,
  payload,
});

export const toggleCocktailRecipe = (payload) => ({
  type: TOGGLE_COCKTAILS_RECIPE,
  payload,
});
