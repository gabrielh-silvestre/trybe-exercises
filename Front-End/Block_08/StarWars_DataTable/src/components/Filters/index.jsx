import React, { useContext } from 'react';

import { StarWarsContext } from '../../context';

import FilterItem from '../FilterItem';

export default function Filters() {
  const { filterOptions: { filterByNumericValues } } = useContext(StarWarsContext);

  return (
    <div>
      {filterByNumericValues.map((option, i) => (
        <FilterItem key={ i } { ...option } />
      ))}
    </div>
  );
}
