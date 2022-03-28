import {
  getDrinkRecipe,
  getDrinksCategoriesAPI,
  getMealRecipe,
  getMealsCategoriesAPI,
  getOnlyIngredients,
  getFilterDrinkByCategoryAPI,
  getFilterMealByCategoryAPI,
  getMealsByArea,
} from '../../services/api';

import {
  SEARCH_MEALS_OPTIONS_FUNCTIONS,
  SEARCH_DRINK_OPTIONS_FUNCTIONS,
} from '../../contants';

export const START_REQUEST = 'START_REQUEST';
export const GET_MEALS = 'GET_MEALS';
export const GET_DRINKS = 'GET_DRINKS';

export const GET_RANDOM_MEAL = 'GET_RANDOM_MEAL';
export const GET_RANDOM_DRINK = 'GET_RANDOM_DRINK';

export const GET_MEALS_CATEGORIES = 'GET_MEALS_CATEGORIES';
export const GET_DRINKS_CATEGORIES = 'GET_DRINKS_CATEGORIES';

export const GET_INGREDIENTS = 'GET_INGREDIENTS';
export const GET_INGREDIENTS_IMAGES = 'GET_INGREDIENTS_IMAGES';
export const GET_FILTER_MEAL_BY_CATEGORY = 'GET_FILTER_MEAL_BY_CATEGORY';

const getMeals = (payload) => {
  if (!payload) global.alert('Sorry, we haven\'t found any recipes for these filters.');

  return { type: GET_MEALS, payload };
};
const getDrinks = (payload) => {
  if (!payload) global.alert('Sorry, we haven\'t found any recipes for these filters.');

  return { type: GET_DRINKS, payload };
};

const getRandomMeal = (payload) => ({ type: GET_RANDOM_MEAL, payload });
const getRandomDrink = (payload) => ({ type: GET_RANDOM_DRINK, payload });

const getMealsCategories = (payload) => ({
  type: GET_MEALS_CATEGORIES,
  payload,
});
const getDrinksCategories = (payload) => ({
  type: GET_DRINKS_CATEGORIES,
  payload,
});

const getIngredients = (payload) => ({ type: GET_INGREDIENTS, payload });

export const fetchAllMeals = () => async (dispatch) => {
  dispatch({ type: START_REQUEST });
  const data = await getMealRecipe();
  dispatch(getMeals(data));
};

export const fetchAllDrinks = () => async (dispatch) => {
  dispatch({ type: START_REQUEST });
  const data = await getDrinkRecipe();
  dispatch(getDrinks(data));
};

export const fetchMealsWithOptions = (option, searchTerm) => async (dispatch) => {
  dispatch({ type: START_REQUEST });
  const data = await SEARCH_MEALS_OPTIONS_FUNCTIONS[option](searchTerm);
  dispatch(getMeals(data));
};

export const fetchDrinksWithOptions = (option, searchTerm) => async (dispatch) => {
  dispatch({ type: START_REQUEST });
  const data = await SEARCH_DRINK_OPTIONS_FUNCTIONS[option](searchTerm);
  dispatch(getDrinks(data));
};

export const fetchMealsCategories = () => async (dispatch) => {
  dispatch({ type: START_REQUEST });
  const data = await getMealsCategoriesAPI();
  dispatch(getMealsCategories(data));
};

export const fetchDrinksCategories = () => async (dispatch) => {
  dispatch({ type: START_REQUEST });
  const data = await getDrinksCategoriesAPI();
  dispatch(getDrinksCategories(data));
};

export const fetchRandomFood = () => async (dispatch) => {
  dispatch({ type: START_REQUEST });
  const data = await SEARCH_MEALS_OPTIONS_FUNCTIONS.RANDOM();
  dispatch(getRandomMeal(data));
};

export const fetchRandomDrink = () => async (dispatch) => {
  dispatch({ type: START_REQUEST });
  const data = await SEARCH_DRINK_OPTIONS_FUNCTIONS.RANDOM();
  dispatch(getRandomDrink(data));
};

export const fetchOnlyIngredients = (drinkOrMeal) => async (dispatch) => {
  dispatch({ type: START_REQUEST });
  const data = await getOnlyIngredients(drinkOrMeal);
  dispatch(getIngredients(data));
};

export const fetchFilterMealByCategories = (category) => async (dispatch) => {
  dispatch({ type: START_REQUEST });
  const data = await getFilterMealByCategoryAPI(category);
  dispatch(getMeals(data));
};

export const fetchFilterDrinkByCategories = (category) => async (dispatch) => {
  dispatch({ type: START_REQUEST });
  const data = await getFilterDrinkByCategoryAPI(category);
  dispatch(getDrinks(data));
};

export const fetchFilterFoodByArea = (area) => async (dispatch) => {
  dispatch({ type: START_REQUEST });
  const data = await getMealsByArea(area);
  dispatch(getMeals(data));
};
