import { fetchQuestions, fetchToken } from '../../services/api';

import setlocalStorage from '../../services/localStorage';

export const SIGN_UP_USER = 'SIGN_UP_USER';
export const GET_SESSION_TOKEN = 'GET_SESSION_TOKEN';
export const SET_QUESTIONS = 'SET_QUESTIONS';
export const START_FETCH = 'START_FETCH';
export const HIT_ANSWER = 'HIT_ANSWER';
export const SELECT_ANSWER = 'SELECT_ANSWER';
export const CHANGE_QUESTION = 'CHANGE_QUESTION';
export const RESET_GAME = 'RESET_GAME';

export const signUpUser = (payload) => ({ type: SIGN_UP_USER, payload });

export const saveToken = () => async (dispatch) => {
  const { token } = await fetchToken();

  setlocalStorage('token', token);
  dispatch({ type: GET_SESSION_TOKEN, payload: token });
};

const setQuestions = (payload) => ({ type: SET_QUESTIONS, payload });
const startFetch = { type: START_FETCH };

export const getQuestions = (token) => async (dispatch) => {
  dispatch(startFetch);
  const questions = await fetchQuestions(token);
  dispatch(setQuestions(questions));
};

export const hitAnswer = (payload) => ({ type: HIT_ANSWER, payload });

export const selectAnswer = { type: SELECT_ANSWER };
export const changeQuestion = (payload) => ({ type: CHANGE_QUESTION, payload });

export const resetGame = { type: RESET_GAME };
