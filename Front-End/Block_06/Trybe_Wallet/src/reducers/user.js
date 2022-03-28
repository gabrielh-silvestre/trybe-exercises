import { LOGIN_USER } from '../actions';

const INITIAL_STATE = {
  email: '',
};

export default function userReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
  case LOGIN_USER:
    return {
      email: action.payload,
    };
  default:
    return state;
  }
}
