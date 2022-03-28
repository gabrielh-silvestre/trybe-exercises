import { useContext, useState, useEffect, useCallback } from 'react';

import { StarWarsContext } from '../context';
import { sortObjAsc, sortObjDesc, sortObjAlf } from '../services';

export const COMPARISONS = ['maior que', 'menor que', 'igual a'];
export const INITIAL_COLUMNS = [
  'population',
  'orbital_period',
  'diameter',
  'rotation_period',
  'surface_water',
];

const FILTER_COMPARISON = {
  'maior que': (el1, el2) => Number(el1) > Number(el2),
  'menor que': (el1, el2) => Number(el1) < Number(el2),
  'igual a': (el1, el2) => Number(el1) === Number(el2),
  '': () => false,
};

const ORDER_COMPARISON = {
  ASC: (arr, orderBy) => sortObjAsc(arr, orderBy),
  DSC: (arr, orderBy) => sortObjDesc(arr, orderBy),
  ALF: (arr) => sortObjAlf(arr),
  '': (arr) => arr,
};

export default function useSearch() {
  const [columnOptions, setColumnOptions] = useState(INITIAL_COLUMNS);
  const [filteredArray, setFilteredArray] = useState([]);
  const {
    data,
    setShowArray,
    filterOptions,
    setFilterOptions,
  } = useContext(StarWarsContext);

  const orderArray = useCallback((arr) => {
    const { order: { column, sort } } = filterOptions;

    if (column === '' || sort === '') {
      const orderedData = ORDER_COMPARISON.ALF(arr, column);
      setFilteredArray(orderedData);
    } else {
      const orderedData = ORDER_COMPARISON[sort](arr, column);
      setFilteredArray(orderedData);
    }
  }, [filterOptions]);

  const filterWithPlanetName = useCallback(() => {
    const {
      filterByName: { name },
      filterByNumericValues,
    } = filterOptions;

    if (filterByNumericValues.length === 0) {
      orderArray(data.filter((item) => item.name.includes(name)));
    }
  }, [data, filterOptions, orderArray]);

  const filterWithNumericValues = useCallback(() => {
    const { filterByName, filterByNumericValues } = filterOptions;

    if (filterByNumericValues.length > 0) {
      const filteredData = data.filter((item) => filterByNumericValues.every(
        ({ column, comparison, value }) => item.name.includes(filterByName.name)
            && FILTER_COMPARISON[comparison](item[column], value),
      ));
      orderArray(filteredData);
    }
  }, [data, filterOptions, orderArray]);

  const setOrder = (column, sort) => {
    setFilterOptions({
      ...filterOptions,
      order: {
        column,
        sort,
      },
    });
  };

  const setSearchTerm = (name) => {
    setFilterOptions({
      ...filterOptions,
      filterByName: {
        name,
      },
    });
  };

  const addFilterOptions = (newOption) => {
    const { filterByNumericValues } = filterOptions;

    setFilterOptions({
      ...filterOptions,
      filterByNumericValues: [...filterByNumericValues, newOption],
    });
    setColumnOptions(columnOptions.filter((item) => item !== newOption.column));
  };

  const removeFilterOption = (optionToRemove) => {
    const { filterByNumericValues } = filterOptions;

    setFilterOptions({
      ...filterOptions,
      filterByNumericValues: filterByNumericValues.filter(
        (item) => item.column !== optionToRemove,
      ),
    });
    setColumnOptions([...columnOptions, optionToRemove]);
  };

  useEffect(() => {
    filterWithPlanetName();
  }, [filterWithPlanetName]);

  useEffect(() => {
    filterWithNumericValues();
  }, [filterWithNumericValues]);

  useEffect(() => {
    setShowArray(filteredArray);
  }, [filteredArray, setShowArray]);

  return {
    columnOptions,
    searchTerm: filterOptions.filterByName.name,
    setOrder,
    setSearchTerm,
    addFilterOptions,
    removeFilterOption,
  };
}
