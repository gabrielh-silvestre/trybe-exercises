/* Logo abaixo do formulário, crie um botão que:

Chame uma função JavaScript e interrompa o fluxo automático do form utilizando o preventDefault() . Note que isso vai impedir as validações do HTML ao fazer o submit

Implemente, agora, no Javascript , as validações que foram pedidas ao longo da montagem do formulário.

Caso todos os dados sejam válidos, monte uma <div> com o consolidado dos dados que foram inseridos no formulário.

Caso haja algum dado inválido, mostre em uma <div> uma mensagem de erro. Se o erro for na Data de Início , a mensagem deve ser contextualizada. */

const user = {
  name: '',
  email: '',
  cpf: '',
  city: '',
  state: '',
  houseType: '',
  resume: '',
  role: '',
  roleDescription: '',
  startDate: '',
}

const inputErrors = {
  name: '',
  email: '',
  cpf: '',
  city: '',
  state: '',
  houseType: '',
  resume: '',
  role: '',
  roleDescription: '',
  startDate: '',
}

const inputsRules = {
  name: {
    maxLength: 40,
    required: true,
  },
  email: {
    maxLength: 50,
    required: true
  },
  cpf: {
    maxLength: 11,
    required: true
  },
  address: {
    maxLength: 200,
    required: true
  },
  city: {
    maxLength: 28,
    required: true,
  },
  state: {
    type: 'select',
    required: true,
  },
  houseType: {
    type: 'radio',
    required: true,
  },
  resume: {
    maxLength: 1000,
    required: true,
  },
  role: {
    maxLength: 40,
    required: true,
  },
  roleDescription: {
    maxLength: 500,
    required: true,
  },
  startDate: {
    type: 'date',
    required: true,
  }
};

const staticElement = {
  allInputs: getAll('input'),
  inputState: getOne('#input-state'),
  errorSection: getOne('#error-section'),
  userSection: getOne('#user-section'),
}

const brazilStates = ['Acre','Alagoas','Amazonas','Amapa','Bahia','Ceará','Distrito Federal','Espírito Santo','Goiás','Maranhão','Minas Gerais','Mato Grosso do Sul','Mato Grosso','Pará','Paraíba','Pernambuco','Piauí','Paraná','Rio de Janeiro','Rio Grande do Norte','Rondônia','Roraima','Rio Grande do Sul','Santa Catarina','Sergipe','São Paulo','Tocantins'];
const stateInitials = ['AC','AL','AM','AP','BA','CE','DF','ES','GO','MA','MG','MS','MT','PA','PB','PE','PI','PR','RJ','RN','RO','RR','RS','SC','SE','SP','TO'];

function generateStates(stateInitialsArray, stateArray) {
  stateArray.forEach((state, i) => {
    const stateOption = createElement('option');
    stateOption.innerText = state;
    stateOption.value = stateInitialsArray[i];
    plugHtml(staticElement.inputState, stateOption);
  });
}

function getInputTextValues() {
  addMultiplesListeners(staticElement.allInputs, 'focusout', filterInputRule);
  getOne('textarea').addEventListener('focusout', filterInputRule);
  getOne('select').addEventListener('focusout', filterInputRule);
  getOne('#submit').addEventListener('click', submitButton);
}

function checkSelected(event) {
  // console.log('state');

  !event.target.value ? inputErrors.state = 'Estado não selecionado' : user.state = event.target.value;
}

function checkRadio(event) {
  // console.log('radio');
  user.houseType = event.target.value;
}

function checkDate(event) {
  // console.log('date');

  if(!event.target.value) {
    inputErrors.startDate = 'Data não preenchida';
  }

  const regex = /^\d\d\d\d\-\d\d\-\d\d$/;
  
  if(!regex.test(event.target.value)){
    inputErrors.startDate = 'Data: Formato inválido';
  }

  const splitedDate = event.target.value.split('-');
  const year = splitedDate[0];
  const month = splitedDate[1];
  const day = splitedDate[2];

  user.startDate = `${day}/${month}/${year}`;
}

function checkText(event) {
  // console.log('input texts');
  if (!event.target.value) {
    inputErrors[event.target.name] = `${event.target.name} não foi preenchido.`;
  }

  if (event.target.value.length > inputsRules[event.target.name].maxLength){
    inputErrors[event.target.name] = `${event.target.name} ultrapassou o limite de caracteres.`;
  }

  user[event.target.name] = event.target.value;
}

function filterInputRule(event) {
  const inputName = event.target.name;

  switch (inputName) {
    case ('state'):
      checkSelected(event);
      break;
    case ('houseType'):
      checkRadio(event);
      break;
    case ('startDate'):
      checkDate(event);
      break;
    default:
      checkText(event);
  }
}

function getRenderedErrors() {
  return getAll('.erro');
}

function resetErrors() {
  const renderedErrors = getRenderedErrors();

  if (renderedErrors) {
    renderedErrors.forEach((error) => {error.remove()});
  }
}

function lastGet() {
  for (let data in user) {
    if (!user[data]) {
      inputErrors[data] = `${data} não foi preenchido.`;
    }

    if (user[data]) {
      inputErrors[data] = '';
    }
  }
}

function renderErrorMsg() {
  const errorDiv = createElement('div');
  plugHtml(staticElement.errorSection, errorDiv);

  for (let erro in inputErrors) {
    if (inputErrors[erro]) {
      const errorParagraph = createElement('p');
      addClass(errorParagraph, 'erro');
      errorParagraph.innerText = inputErrors[erro];
      plugHtml(errorDiv, errorParagraph);
    }
  }
}

function renderUserData() {
  if (!getRenderedErrors()) {
    const userDiv = createElement('div');
    plugHtml(staticElement.userSection, userDiv);

    for (let data in user) {
      if(user[data]) {
        const userParagraph = createElement('p');
        userParagraph.innerText = user[data];
        plugHtml(userDiv, userParagraph);
      }
    }
  }
}

function submitForms() {
  resetErrors();
  renderErrorMsg();
  renderUserData();
}

function submitButton(event) {
  event.preventDefault();
  lastGet();
  submitForms();
}

window.onload = () => {
  generateStates(stateInitials, brazilStates);
  getInputTextValues();
};
