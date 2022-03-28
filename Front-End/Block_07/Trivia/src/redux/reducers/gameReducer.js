import { SELECT_ANSWER, CHANGE_QUESTION } from '../actions';

const INITIAL_STATE = {
  actualQuestion: undefined,
  isSelected: false,
};

export default function gameReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
  case SELECT_ANSWER:
    return {
      ...state,
      isSelected: true,
    };
  case CHANGE_QUESTION:
    return {
      ...state,
      isSelected: false,
      actualQuestion: action.payload,
    };
  default:
    return state;
  }
}
