import {
  ADD_EXPENSE,
  DELETE_EXPENSE,
  EDIT_EXPENSE,
  GET_CURRENCY,
  START_EDIT,
} from '../actions';
import { changeArrItem } from '../helpers';

const INITIAL_STATE = {
  currencies: [],
  expenses: [],
  editId: -1,
};

export default function walletReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
  case ADD_EXPENSE:
    return {
      ...state,
      expenses: [...state.expenses, action.payload],
    };
  case GET_CURRENCY:
    return {
      ...state,
      currencies: action.payload,
    };
  case DELETE_EXPENSE:
    return {
      ...state,
      expenses: state.expenses.filter(({ id }) => id !== action.payload),
    };
  case START_EDIT: {
    return {
      ...state,
      editId: action.payload,
    };
  }
  case EDIT_EXPENSE: {
    return {
      ...state,
      expenses: changeArrItem(state.expenses, state.editId, action.payload),
      editId: -1,
    };
  }
  default:
    return state;
  }
}
