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
  allInputText: getAll('[type="text"]'),
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

function getInputRule(inputElement) {
  return inputsRules[inputElement];
}

function filterInputRule(inputElement) {
  switch (getInputRule(inputElement)) {
    case ('state'):
      checkSelected();
      break;
    case ('houseStype'):
      checkRadio();
      break;
    case ('date'):
      checkDate();
      break;
    default:
      checkText();
  }
}

window.onload = () => {
  generateStates(stateInitials, brazilStates); 
};
