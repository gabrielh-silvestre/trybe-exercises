import { SET_CATEGORY } from '../actions/setCategory';

const INITIAL_STATE = {
  category: '',
};

export default function categoryReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
  case SET_CATEGORY:
    return {
      category: action.payload,
    };
  default:
    return state;
  }
}
