const ESTADO_INICIAL = {
  colors: ['white', 'black', 'red', 'green', 'blue', 'yellow'],
  index: 0,
};

const NEXT_COLOR = 'NEXT_COLOR';
const PREVIOUS_COLOR = 'PREVIOUS_COLOR';

const nextColor = { type: NEXT_COLOR };
const prevColor = { type: PREVIOUS_COLOR };

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
    default:
      return state;
  }
}

const store = Redux.createStore(reducer);

const elements = {
  prevButton: document.getElementById('previous'),
  nextButton: document.getElementById('next'),
  colorValue: document.getElementById('value'),
};

const handleChangeColor = () => {
  const { prevButton, nextButton } = elements;

  nextButton.addEventListener('click', () => {
    store.dispatch(nextColor);
  });
  prevButton.addEventListener('click', () => {
    store.dispatch(prevColor);
  });
};

window.onload = () => {
  handleChangeColor();
  store.subscribe(() => {
    const { colors, index } = store.getState();
    elements.colorValue.innerText = colors[index];
  });
};
