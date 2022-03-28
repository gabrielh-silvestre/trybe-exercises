export const findItemIndex = (arr, id) => arr.findIndex((item) => item.id === id);

export const changeArrItem = (arr, id, item) => {
  const newArr = [...arr];
  const itemIndex = findItemIndex(arr, id);

  newArr.splice(itemIndex, 1, item);
  return newArr;
};
