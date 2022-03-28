import { GET_SESSION_TOKEN } from '../actions';

const INITIAL_STATE = '';

export default function apiReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
  case GET_SESSION_TOKEN:
    return action.payload;

  default:
    return state;
  }
}
