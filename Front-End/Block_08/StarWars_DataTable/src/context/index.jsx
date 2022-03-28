import React, { createContext, useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import useFetch from '../hooks/useFetch';

export const StarWarsContext = createContext();

const INITIAL_FILTER_OPTIONS = {
  filterByName: {
    name: '',
  },
  filterByNumericValues: [],
  order: {
    column: '',
    sort: '',
  },
};

export default function StarWarsProvider({ children }) {
  const [showArray, setShowArray] = useState([]);
  const [filterOptions, setFilterOptions] = useState(INITIAL_FILTER_OPTIONS);
  const { data, isLoading } = useFetch();

  useEffect(() => {
    setShowArray(data);
  }, [data]);

  const context = {
    data,
    isLoading,
    showArray,
    filterOptions,
    setShowArray,
    setFilterOptions,
  };

  return (
    <StarWarsContext.Provider value={ context }>
      {children}
    </StarWarsContext.Provider>
  );
}

StarWarsProvider.propTypes = {
  children: PropTypes.element.isRequired,
};
