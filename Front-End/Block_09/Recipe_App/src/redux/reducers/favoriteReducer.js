import {
  ADD_RECIPE_TO_FAVORITE,
  REMOVE_RECIPE_FROM_FAVORITE,
  RECOVERY_RECIPES_FROM_LOCAL_STORAGE,
} from '../actions/favoriteActions';

const INITIAL_STATE = {
  favoriteRecipes: [],
};

export default function favoriteReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
  case ADD_RECIPE_TO_FAVORITE:
    return {
      ...state,
      favoriteRecipes: [...state.favoriteRecipes, action.payload],
    };
  case REMOVE_RECIPE_FROM_FAVORITE:
    return {
      ...state,
      favoriteRecipes: state.favoriteRecipes.filter(
        ({ id }) => action.payload.id !== id,
      ),
    };
  case RECOVERY_RECIPES_FROM_LOCAL_STORAGE:
    return {
      ...state,
      favoriteRecipes: action.payload,
    };
  default:
    return state;
  }
}
