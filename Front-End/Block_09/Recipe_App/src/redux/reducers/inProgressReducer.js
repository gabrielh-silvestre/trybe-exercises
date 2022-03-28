import {
  TOGGLE_MEALS_RECIPE,
  TOGGLE_COCKTAILS_RECIPE,
} from '../actions/inProgressActions';

const INITIAL_STATE = {
  meals: {},
  cocktails: {},
};

export default function inProgressReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
  case TOGGLE_MEALS_RECIPE:
    return {
      ...state,
      meals: {
        ...state.meals,
        [action.payload.id]: action.payload.igredients,
      },
    };
  case TOGGLE_COCKTAILS_RECIPE:
    return {
      ...state,
      cocktails: {
        ...state.cocktails,
        [action.payload.id]: action.payload.igredients,
      },
    };
  default:
    return state;
  }
}
