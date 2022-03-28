import fetchData from './api';

export const LOGIN_USER = 'LOGIN_USER';
export const ADD_EXPENSE = 'ADD_EXPENSE';
export const GET_CURRENCY = 'GET_CURRENCY';
export const START_EDIT = 'START_EDIT';
export const EDIT_EXPENSE = 'EDIT_EXPENSE';

export const DELETE_EXPENSE = 'DELETE_EXPENSE';
export const ATT_EXPENSE_ID = 'ATT_EXPENSE_ID';

export const loginUser = (payload) => ({ type: LOGIN_USER, payload });

export const addExpense = (payload) => async (dispatch) => {
  const currencies = await fetchData();
  dispatch({
    type: ADD_EXPENSE,
    payload: { ...payload, exchangeRates: currencies },
  });
};

export const getCurrency = () => async (dispatch) => {
  const currencies = await fetchData();
  dispatch({ type: GET_CURRENCY, payload: Object.keys(currencies) });
};

export const startEdit = (payload) => ({ type: START_EDIT, payload });

export const editExpense = (payload) => async (dispatch) => {
  dispatch({
    type: EDIT_EXPENSE,
    payload,
  });
};

export function deleteExpense(payload) {
  return async (dispatch) => {
    dispatch({ type: DELETE_EXPENSE, payload });
    // dispatch({ type: ATT_EXPENSE_ID });
  };
}
