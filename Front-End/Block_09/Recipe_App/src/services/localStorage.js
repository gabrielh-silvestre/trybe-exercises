function setLocalStorage(key, item) {
  const convertedItem = JSON.stringify(item);
  localStorage.setItem(key, convertedItem);
}

export function getLocalStorage(key) {
  const convertedItem = JSON.parse(localStorage.getItem(key));
  return convertedItem;
}

export function addFavoriteRecipesOnLocal(newFavoriteRecipe) {
  const favoriteList = localStorage.getItem('favoriteRecipes')
    ? getLocalStorage('favoriteRecipes')
    : [];

  if (!favoriteList.length) {
    setLocalStorage('favoriteRecipes', [newFavoriteRecipe]);
  } else {
    setLocalStorage('favoriteRecipes', [...favoriteList, newFavoriteRecipe]);
  }
}

export function removeFavoriteRecipesFromLocal(favoriteRecipe) {
  const favoriteList = getLocalStorage('favoriteRecipes');

  const attList = favoriteList.filter(
    (favItem) => favItem.id !== favoriteRecipe.id,
  );

  setLocalStorage('favoriteRecipes', attList);
}

export function addDoneRecipesOnLocal(newDoneRecipe) {
  const doneList = localStorage.getItem('doneRecipes')
    ? getLocalStorage('doneRecipes')
    : [];

  if (!doneList.length) {
    setLocalStorage('doneRecipes', [newDoneRecipe]);
  } else {
    setLocalStorage('doneRecipes', [...doneList, newDoneRecipe]);
  }
}

export function removeDoneRecipesFromLocal(doneRecipe) {
  const doneList = getLocalStorage('doneRecipes');

  const attList = doneList.filter(
    (doneItem) => doneItem.id !== doneRecipe.id,
  );

  setLocalStorage('doneRecipes', attList);
}

export function toggleInProgressRecipesFromLocal(inProgressList) {
  setLocalStorage('inProgressRecipes', inProgressList);
}
