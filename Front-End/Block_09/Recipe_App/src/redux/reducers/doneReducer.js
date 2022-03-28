import {
  ADD_RECIPE_TO_DONE,
  REMOVE_RECIPE_FROM_DONE,
  RECOVERY_DONE_FROM_LOCAL_STORAGE,
} from '../actions/doneActions';

const INITIAL_STATE = [];

export default function doneReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
  case ADD_RECIPE_TO_DONE:
    return [...state, action.payload];
  case REMOVE_RECIPE_FROM_DONE:
    return state.filter(
      ({ id }) => action.payload.id !== id,
    );
  case RECOVERY_DONE_FROM_LOCAL_STORAGE:
    return action.payload;
  default:
    return state;
  }
}
