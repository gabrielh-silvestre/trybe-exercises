import React from 'react';
import PropTypes from 'prop-types';

export default function TableBody({ data, categories }) {
  return (
    <>
      {data.map((planet, i) => (
        <tr key={ i }>
          {categories.map((category, j) => (
            <td key={ j } data-testid={ category === 'name' ? 'planet-name' : '' }>
              {planet[category]}
            </td>
          ))}
        </tr>
      ))}
    </>
  );
}

TableBody.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
  categories: PropTypes.arrayOf(PropTypes.string).isRequired,
};
