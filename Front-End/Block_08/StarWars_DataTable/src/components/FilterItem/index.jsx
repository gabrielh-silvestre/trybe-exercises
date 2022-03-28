import React from 'react';
import PropTypes from 'prop-types';

import useSearch from '../../hooks/useSearch';

export default function FilterItem({ column, comparison, value }) {
  const { removeFilterOption } = useSearch();

  const handleRemoveFilter = (optionToRemove) => {
    removeFilterOption(optionToRemove);
  };

  return (
    <div data-testid="filter">
      {`${column} - ${comparison} - ${value}`}
      <button
        type="button"
        onClick={ () => {
          handleRemoveFilter(column);
        } }
      >
        X
      </button>
    </div>
  );
}

FilterItem.propTypes = {
  column: PropTypes.string.isRequired,
  comparison: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
};
