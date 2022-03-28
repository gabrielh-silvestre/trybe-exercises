const BASE_MEAL_URL = 'https://www.themealdb.com/api/json/v1/1/search.php?s=';
const BASE_MEAL_BY_ID_URL = 'https://www.themealdb.com/api/json/v1/1/lookup.php?i=';
const BASE_MEAL_INGREDIENT_URL = 'https://www.themealdb.com/api/json/v1/1/filter.php?i=';
const BASE_MEAL_FIRST_LETTER_URL = 'https://www.themealdb.com/api/json/v1/1/search.php?f=';

const BASE_DRINK_URL = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=';
const BASE_DRINK_BY_ID_URL = 'https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=';
const BASE_DRINK_INGREDIENT_URL = 'https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=';
const BASE_DRINK_FIRST_LETTER_URL = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?f=';

const BASE_MEALS_CATEGORIES = 'https://www.themealdb.com/api/json/v1/1/list.php?c=list';
const BASE_DRINKS_CATEGORIES = 'https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list';

const RANDOM_MEAL_URL = 'https://www.themealdb.com/api/json/v1/1/random.php';
const RANDOM_DRINK_URL = 'https://www.thecocktaildb.com/api/json/v1/1/random.php';

const ONLY_MEALS_INGREDIENTS_URL = 'https://www.themealdb.com/api/json/v1/1/list.php?i=list';
const ONLY_DRINKS_INGREDIENTS_URL = 'https://www.thecocktaildb.com/api/json/v1/1/list.php?i=list';
const BASE_MEAL_FILTER_CATEGORIES = 'https://www.themealdb.com/api/json/v1/1/filter.php?c=';
const BASE_DRINK_FILTER_CATEGORIES = 'https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=';

const NATIONALITIES_URL = 'https://www.themealdb.com/api/json/v1/1/list.php?a=list';
const FILTER_BY_AREA = (area) => `https://www.themealdb.com/api/json/v1/1/filter.php?a=${area}`;

export async function getMealRecipe(searchTerm) {
  const res = searchTerm
    ? await fetch(`${BASE_MEAL_URL}${searchTerm}`)
    : await fetch(BASE_MEAL_URL);
  const data = await res.json();
  return data.meals;
}

export async function getMealByIdRecipe(mealId) {
  const res = await fetch(`${BASE_MEAL_BY_ID_URL}${mealId}`);
  const data = await res.json();
  return data.meals;
}

export async function getMealByIngredientRecipe(searchTerm) {
  const res = await fetch(`${BASE_MEAL_INGREDIENT_URL}${searchTerm}`);
  const data = await res.json();
  return data.meals;
}

export async function getMealByFirstLetterRecipe(searchTerm) {
  const res = await fetch(`${BASE_MEAL_FIRST_LETTER_URL}${searchTerm}`);
  const data = await res.json();
  return data.meals;
}

export async function getDrinkRecipe(searchTerm) {
  const res = searchTerm
    ? await fetch(`${BASE_DRINK_URL}${searchTerm}`)
    : await fetch(BASE_DRINK_URL);
  const data = await res.json();
  return data.drinks;
}

export async function getDrinkByFirstLetterRecipe(searchTerm) {
  const res = await fetch(`${BASE_DRINK_FIRST_LETTER_URL}${searchTerm}`);
  const data = await res.json();
  return data.drinks;
}

export async function getDrinkByIngredientRecipe(searchTerm) {
  const res = await fetch(`${BASE_DRINK_INGREDIENT_URL}${searchTerm}`);
  const data = await res.json();
  return data.drinks;
}

export async function getMealsCategoriesAPI() {
  const res = await fetch(BASE_MEALS_CATEGORIES);
  const data = await res.json();
  return data.meals;
}

export async function getDrinksCategoriesAPI() {
  const res = await fetch(BASE_DRINKS_CATEGORIES);
  const data = await res.json();
  return data.drinks;
}

export async function getRandomMeal() {
  const res = await fetch(RANDOM_MEAL_URL);
  const data = await res.json();
  return data.meals;
}

export async function getRandomDrink() {
  const res = await fetch(RANDOM_DRINK_URL);
  const data = await res.json();
  return data.drinks;
}

export async function getOnlyIngredients(drinkOrMeal) {
  const res = drinkOrMeal.includes('foods')
    ? await fetch(ONLY_MEALS_INGREDIENTS_URL)
    : await fetch(ONLY_DRINKS_INGREDIENTS_URL);
  const data = await res.json();
  return data;
}

export async function getDrinkByIdRecipe(drinkId) {
  const res = await fetch(`${BASE_DRINK_BY_ID_URL}${drinkId}`);
  const data = await res.json();
  return data.drinks;
}

export async function getFilterMealByCategoryAPI(category) {
  const res = await fetch(`${BASE_MEAL_FILTER_CATEGORIES}${category}`);
  const data = await res.json();
  return data.meals;
}

export async function getFilterDrinkByCategoryAPI(category) {
  const res = await fetch(`${BASE_DRINK_FILTER_CATEGORIES}${category}`);
  const data = await res.json();
  return data.drinks;
}

export async function getNationality() {
  const res = await fetch(NATIONALITIES_URL);
  const data = await res.json();
  return data.meals;
}

export async function getMealsByArea(area) {
  const res = await fetch(FILTER_BY_AREA(area));
  const data = await res.json();
  return data.meals;
}
