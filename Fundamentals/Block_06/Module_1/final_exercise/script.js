/* Logo abaixo do formulário, crie um botão que:

Chame uma função JavaScript e interrompa o fluxo automático do form utilizando o preventDefault() . Note que isso vai impedir as validações do HTML ao fazer o submit

Implemente, agora, no Javascript , as validações que foram pedidas ao longo da montagem do formulário.

Caso todos os dados sejam válidos, monte uma <div> com o consolidado dos dados que foram inseridos no formulário.

Caso haja algum dado inválido, mostre em uma <div> uma mensagem de erro. Se o erro for na Data de Início , a mensagem deve ser contextualizada. */

const user = {
  userName: '',
  userEmail: '',
  userCpf: '',
  userCity: '',
  userState: '',
  userHome: '',
  userResume: '',
  userJob: '',
  userJobDesction: '',
  userStartDate: '',
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
}

function checkSelected(event) {
  console.log(event.target.value);
}

function checkRadio(event) {
  console.log(event.target.value);
}

function checkDate(event) {
  console.log(event.target.value);
}

function checkText(event) {
  // console.log('input texts');
  if (!event.target.value) {
    return false;
  }

  if (event.target.value.length > inputsRules[event.target.name].maxLength){
    return false;
  }

  return true;
}

function getInputRule(inputElement) {
  return inputsRules[inputElement];
}

function filterInputRule(event) {
  switch (event.target.name) {
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

window.onload = () => {
  generateStates(stateInitials, brazilStates);
  getInputTextValues();
};
