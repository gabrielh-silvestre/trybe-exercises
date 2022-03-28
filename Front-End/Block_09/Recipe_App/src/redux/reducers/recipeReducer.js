import {
  GET_DRINKS,
  GET_MEALS,
  START_REQUEST,
  GET_MEALS_CATEGORIES,
  GET_DRINKS_CATEGORIES,
} from '../actions/recipeActions';

const INITIAL_STATE = {
  meals: [],
  drinks: [],
  categories: {
    meals: [],
    drinks: [],
  },
  isLoading: false,
};

export default function recipeReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
  case START_REQUEST:
    return {
      ...state,
      isLoading: true,
    };
  case GET_MEALS:
    return {
      ...state,
      meals: action.payload || [],
      isLoading: false,
    };
  case GET_DRINKS:
    return {
      ...state,
      drinks: action.payload || [],
      isLoading: false,
    };
  case GET_MEALS_CATEGORIES:
    return {
      ...state,
      categories: {
        ...state.categories,
        meals: action.payload,
      },
      isLoading: false,
    };
  case GET_DRINKS_CATEGORIES:
    return {
      ...state,
      categories: {
        ...state.categories,
        drinks: action.payload,
      },
      isLoading: false,
    };
  default:
    return state;
  }
}
