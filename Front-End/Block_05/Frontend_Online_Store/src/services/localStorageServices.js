export const setLocalState = (stateName, stateValue) => {
  const data = JSON.stringify(stateValue);
  localStorage.setItem(stateName, data);
};

export const getLocalState = (stateName) => JSON.parse(localStorage.getItem(stateName));
