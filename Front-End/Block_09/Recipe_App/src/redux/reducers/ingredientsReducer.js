import { GET_INGREDIENTS, START_REQUEST } from '../actions/recipeActions';

const INITIAL_STATE = {
  ingredients: {
    meals: [],
    drinks: [],
  },
  isLoading: false,
};

export default function ingredientsReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
  case START_REQUEST:
    return {
      ...state,
      isLoading: true,
    };
  case GET_INGREDIENTS:
    return {
      ingredients: {
        meals: action.payload.meals ? action.payload.meals : [],
        drinks: action.payload.drinks ? action.payload.drinks : [],
      },
      isLoading: false,
    };
  default:
    return state;
  }
}
