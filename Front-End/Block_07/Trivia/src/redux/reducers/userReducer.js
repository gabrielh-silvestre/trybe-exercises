import { HIT_ANSWER, SIGN_UP_USER, RESET_GAME } from '../actions';

const INITIAL_STATE = {
  name: '',
  assertions: 0,
  score: 0,
  gravatarEmail: '',
};

export default function userReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
  case SIGN_UP_USER:
    return {
      ...state,
      ...action.payload,
    };
  case HIT_ANSWER:
    return {
      ...state,
      score: state.score + action.payload,
      assertions: state.assertions + 1,
    };
  case RESET_GAME:
    return INITIAL_STATE;
  default:
    return state;
  }
}
