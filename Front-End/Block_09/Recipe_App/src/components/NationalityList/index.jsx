import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Card from '../Card';

import { fetchNationalities } from '../../redux/actions/setNationality';
import { fetchAllMeals, fetchFilterFoodByArea } from '../../redux/actions/recipeActions';
import { Select, Container } from './style';
import Loading from '../Loading';

const END = 12;

export default function NationalityList() {
  const national = useSelector((state) => state.nationalities.national);
  const isLoading = useSelector((state) => state.recipes.isLoading);
  const area = useSelector((state) => state.recipes);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchNationalities());
    dispatch(fetchAllMeals());
  }, [dispatch]);

  const handleClick = ({ target: { value } }) => {
    if (value === 'All') {
      dispatch(fetchAllMeals());
    } else {
      dispatch(fetchFilterFoodByArea(value));
    }
  };

  return (
    <Container>
      <div className="my-3">
        <Select
          data-testid="explore-by-nationality-dropdown"
          onClick={ handleClick }
        >
          {national && national.length > 0
          && national
            .map((e, i) => (
              <option
                key={ i }
                data-testid={ `${e.strArea}-option` }
              >
                {e.strArea}
              </option>
            ))}
        </Select>
      </div>
      {isLoading ? (
        <Loading />
      ) : (
        <div>
          {area.meals.length > 0
            && area.meals.slice(0, END)
              .map((meal, i) => (
                <Card key={ i } index={ i } { ...meal } />))}
        </div>
      )}
    </Container>
  );
}
