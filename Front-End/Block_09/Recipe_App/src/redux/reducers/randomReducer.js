import {
  GET_RANDOM_MEAL,
  GET_RANDOM_DRINK,
  START_REQUEST,
} from '../actions/recipeActions';

const INITIAL_STATE = {
  randomMeal: [],
  randomDrink: [],
  isLoading: false,
};

export default function randomReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
  case START_REQUEST:
    return {
      ...state,
      isLoading: true,
    };
  case GET_RANDOM_MEAL:
    return {
      randomMeal: action.payload,
      randomDrink: [],
      isLoading: false,
    };
  case GET_RANDOM_DRINK:
    return {
      randomMeal: [],
      randomDrink: action.payload,
      isLoading: false,
    };
  default:
    return state;
  }
}
