import { useState } from 'react';

type ArrayState = string[];

export default function useArray(defaultValue: ArrayState = []) {
  const [array, setArray] = useState<ArrayState>(defaultValue);

  const addItem = (newItem: string) => {
    setArray([...array, newItem]);
  };

  const removeItem = (item: string) => {
    const newArr = array.filter((itemName) => itemName !== item);
    setArray(newArr);
  };

  const returnObj = {
    myArray: {
      array,
      addItem,
      removeItem,
    }
  }

  return returnObj;
}
