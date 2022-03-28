import React, { useContext, useState, useEffect } from 'react';

import { StarWarsContext } from '../../context';

import TableBody from '../TableBody';

export default function Table() {
  const { showArray } = useContext(StarWarsContext);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    if (showArray.length > 0) {
      const neededCategories = Object.keys(showArray[0]);
      neededCategories.length = 13;

      setCategories(neededCategories);
    }
  }, [showArray]);

  return (
    <table>
      <thead>
        <tr>
          {categories.map((key, i) => (
            <th key={ i }>{key}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        <TableBody data={ showArray } categories={ categories } />
      </tbody>
    </table>
  );
}
