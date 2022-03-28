import { combineReducers } from 'redux';

import quizReducer from './quizReducer';
import userReducer from './userReducer';
import apiReducer from './apiReducer';
import gameReducer from './gameReducer';

const rootReducer = combineReducers({
  player: userReducer,
  quiz: quizReducer,
  game: gameReducer,
  token: apiReducer,
});

export default rootReducer;
