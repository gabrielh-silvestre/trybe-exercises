import React, { useState } from 'react';

import useSearch, { INITIAL_COLUMNS } from '../../hooks/useSearch';

import Select from '../Select';
import Input from '../Input';

export default function OrderBy() {
  const [orderBy, setOrderBy] = useState(INITIAL_COLUMNS[0]);
  const [orderType, setOrderType] = useState('');
  const { setOrder } = useSearch();

  const handleOrderChange = ({ target: { value } }) => {
    setOrderBy(value);
  };

  const handleOrderTypeChange = ({ target: { value } }) => {
    setOrderType(value);
  };

  const handleClick = () => {
    setOrder(orderBy, orderType);
  };

  return (
    <>
      <Select
        name="order-column"
        value={ orderBy }
        options={ INITIAL_COLUMNS }
        testId="column-sort"
        onChange={ handleOrderChange }
      />
      <Input
        type="radio"
        name="order-type"
        label="Ascendente"
        value="ASC"
        testid="column-sort-input-asc"
        onChange={ handleOrderTypeChange }
      />
      <Input
        type="radio"
        name="order-type"
        label="Descendente"
        value="DSC"
        testid="column-sort-input-desc"
        onChange={ handleOrderTypeChange }
      />
      <button
        type="button"
        data-testid="column-sort-button"
        onClick={ handleClick }
      >
        Ordenar
      </button>
    </>
  );
}
