const ESTADO_INICIAL = {
  colors: ['white', 'black', 'red', 'green', 'blue', 'yellow'],
  index: 0,
};

const NEXT_COLOR = 'NEXT_COLOR';
const PREVIOUS_COLOR = 'PREVIOUS_COLOR';
const ADD_COLOR = 'ADD_COLOR';

const nextColor = { type: NEXT_COLOR };
const prevColor = { type: PREVIOUS_COLOR };
const addColor = (newColor) => ({ type: ADD_COLOR, newColor });

function reducer(state = ESTADO_INICIAL, action) {
  switch (action.type) {
    case NEXT_COLOR:
      return {
        ...state,
        index: state.index < state.colors.length - 1 ? state.index + 1 : 0,
      };
    case PREVIOUS_COLOR:
      return {
        ...state,
        index: state.index > 0 ? state.index - 1 : state.colors.length - 1,
      };
    case ADD_COLOR:
      return {
        ...state,
        colors: [...state.colors, action.newColor],
        index: state.colors.length,
      };
    default:
      return state;
  }
}

const store = Redux.createStore(reducer);

const elements = {
  prevButton: document.getElementById('previous'),
  nextButton: document.getElementById('next'),
  randomButton: document.getElementById('random'),
  colorValue: document.getElementById('value'),
};

const randomNumber = () => Math.floor(Math.random() * 255);

const generateRandomColor = () =>
  `rgb(${randomNumber()}, ${randomNumber()}, ${randomNumber()})`;

const handleChangeColor = () => {
  const { prevButton, nextButton } = elements;

  nextButton.addEventListener('click', () => {
    store.dispatch(nextColor);
  });
  prevButton.addEventListener('click', () => {
    store.dispatch(prevColor);
  });
};

const handleRandomColor = () => {
  const { randomButton } = elements;

  randomButton.addEventListener('click', () => {
    store.dispatch(addColor(generateRandomColor()));
  });
};

window.onload = () => {
  handleChangeColor();
  handleRandomColor();
  store.subscribe(() => {
    const { colors, index } = store.getState();
    elements.colorValue.innerText = colors[index];
  });
};
