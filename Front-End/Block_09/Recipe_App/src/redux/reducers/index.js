import { combineReducers } from 'redux';

import randomReducer from './randomReducer';
import favoriteReducer from './favoriteReducer';
import inProgressReducer from './inProgressReducer';
import recipeReducer from './recipeReducer';
import ingredientsReducer from './ingredientsReducer';
import categoryReducer from './categoryReducer';
import doneReducer from './doneReducer';
import nationalityReducer from './nationalityReducer';

const rootReducer = combineReducers({
  recipes: recipeReducer,
  random: randomReducer,
  ingredients: ingredientsReducer,
  category: categoryReducer,
  favorites: favoriteReducer,
  inProgress: inProgressReducer,
  doneRecipes: doneReducer,
  nationalities: nationalityReducer,
});

export default rootReducer;
