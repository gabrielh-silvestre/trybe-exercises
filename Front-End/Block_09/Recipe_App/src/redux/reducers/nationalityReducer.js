import { START_REQUEST,
  GET_NATIONALITIES } from '../actions/setNationality';

const INITIAL_STATE = {
  national: [],
  isLoading: false,
};

export default function nationalityReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
  case START_REQUEST:
    return {
      ...state,
      isLoading: true,
    };
  case GET_NATIONALITIES:
    return {
      ...state,
      national: [{ strArea: 'All' }, action.payload].flat(),
      isLoading: false,
    };
  default:
    return state;
  }
}
