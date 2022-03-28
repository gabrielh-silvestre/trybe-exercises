import { getNationality } from '../../services/api';

export const START_REQUEST = 'START_REQUEST';
export const GET_NATIONALITIES = 'GET_NATIONALITIES';

const getNationalities = (payload) => ({ type: GET_NATIONALITIES, payload });

export const fetchNationalities = () => async (dispatch) => {
  dispatch({ type: START_REQUEST });
  const data = await getNationality();
  dispatch(getNationalities(data));
};
