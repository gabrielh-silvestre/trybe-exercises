const ESTADO_INICIAL_1 = {
  nome: 'Rodrigo',
  sobrenome: 'Santos da Silva',
  endereco: 'Rua Soldado Mathias, 765',
  cidade: 'Belo Horizonte',
};

const ESTADO_INICIAL_2 = {
  nome: 'Bruna',
  sobrenome: 'Santana Oliveira',
  endereco: 'Rua Holanda, 332',
  cidade: 'São Paulo',
};

const CHANGE_FIRST_NAME_AND_USER_NAME = 'CHANGE_FIRST_NAME_AND_USER_NAME';
const CHANGE_SECOND_NAME_AND_USER_NAME = 'CHANGE_SECOND_NAME_AND_USER_NAME';

const changeFirst = {
  type: CHANGE_FIRST_NAME_AND_USER_NAME,
  payload: { nome: 'Gabriel', sobrenome: 'Silvestre' },
};

const changeSecond = {
  type: CHANGE_SECOND_NAME_AND_USER_NAME,
  payload: { nome: 'Jorge', sobrenome: 'Amado' },
};

const meuPrimeiroReducer = (state = ESTADO_INICIAL_1, action) => {
  switch (action.type) {
    case CHANGE_FIRST_NAME_AND_USER_NAME:
      return {
        ...state,
        nome: action.payload.nome,
        sobrenome: action.payload.sobrenome,
      };
    default:
      return state;
  }
};

const meuSegundoReducer = (state = ESTADO_INICIAL_2, action) => {
  switch (action.type) {
    case CHANGE_SECOND_NAME_AND_USER_NAME:
      return {
        ...state,
        nome: action.payload.nome,
        sobrenome: action.payload.sobrenome,
      };
    default:
      return state;
  }
};

const rootReducer = Redux.combineReducers({
  primeiro: meuPrimeiroReducer,
  segundo: meuSegundoReducer,
});

const store = Redux.createStore(rootReducer);

const elements = {
  name1: document.getElementById('nome-1'),
  lastName1: document.getElementById('sobrenome-1'),
  name2: document.getElementById('nome-2'),
  lastName2: document.getElementById('sobrenome-2'),
};

window.onload = () => {
  setTimeout(() => {
    store.dispatch(changeFirst);
    store.dispatch(changeSecond);
  }, 3000);
};

store.subscribe(() => {
  const { name1, name2, lastName1, lastName2 } = elements;
  const { primeiro, segundo } = store.getState();

  name1.innerText = primeiro.nome;
  lastName1.innerText = primeiro.sobrenome;

  name2.innerText = segundo.nome;
  lastName2.innerText = segundo.sobrenome;
});
