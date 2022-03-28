import React, { useState } from 'react';

import useSearch, { COMPARISONS, INITIAL_COLUMNS } from '../../hooks/useSearch';

import Input from '../Input';
import Select from '../Select';

const INITIAL_NUMERIC_VALUES = {
  column: INITIAL_COLUMNS[0],
  comparison: COMPARISONS[0],
  value: '0',
};

export default function SearchBar() {
  const { columnOptions, searchTerm, setSearchTerm, addFilterOptions } = useSearch();
  const [numericValues, setNumericValues] = useState(INITIAL_NUMERIC_VALUES);

  const handleChange = ({ target: { value } }) => {
    setSearchTerm(value);
  };

  const handleNumericChange = ({ target: { name, value } }) => {
    setNumericValues({
      ...numericValues,
      [name]: value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    addFilterOptions(numericValues);
    setNumericValues(INITIAL_NUMERIC_VALUES);
  };

  const { column, comparison, value } = numericValues;

  return (
    <form onSubmit={ handleSubmit }>
      <Input
        type="text"
        name="name"
        label="Nome do planeta"
        value={ searchTerm }
        onChange={ handleChange }
        testid="name-filter"
      />
      <Select
        name="column"
        label="Coluna"
        value={ column }
        onChange={ handleNumericChange }
        testId="column-filter"
        options={ columnOptions }
      />
      <Select
        name="comparison"
        label="Operador"
        value={ comparison }
        onChange={ handleNumericChange }
        testId="comparison-filter"
        options={ COMPARISONS }
      />
      <Input
        type="number"
        name="value"
        label="Valor"
        value={ value }
        onChange={ handleNumericChange }
        testid="value-filter"
      />
      <button type="submit" data-testid="button-filter">Filtrar</button>
    </form>
  );
}
