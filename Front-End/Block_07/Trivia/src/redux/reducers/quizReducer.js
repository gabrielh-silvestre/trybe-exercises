import { SET_QUESTIONS, START_FETCH } from '../actions';

const INITIAL_STATE = {
  responseCode: undefined,
  questions: [],
  isLoading: true,
};

export default function quizReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
  case START_FETCH:
    return {
      ...state,
      isLoading: true,
    };
  case SET_QUESTIONS:
    return {
      ...state,
      responseCode: action.payload.response_code,
      questions: [...action.payload.results],
      isLoading: false,
    };
  default:
    return state;
  }
}
