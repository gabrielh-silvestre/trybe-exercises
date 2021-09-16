/* Logo abaixo do formulário, crie um botão que:

Chame uma função JavaScript e interrompa o fluxo automático do form utilizando o preventDefault() . Note que isso vai impedir as validações do HTML ao fazer o submit

Implemente, agora, no Javascript , as validações que foram pedidas ao longo da montagem do formulário.

Caso todos os dados sejam válidos, monte uma <div> com o consolidado dos dados que foram inseridos no formulário.

Caso haja algum dado inválido, mostre em uma <div> uma mensagem de erro. Se o erro for na Data de Início , a mensagem deve ser contextualizada. */

// http://127.0.0.1:5500/index.html?user-name=Ga&user-email=E%40E&user-cpf=33388811100&user-city=Cidade&user-home=on&user-resume=abalacabaca+abalacabaca+abalacabaca+abalacabaca+abalacabaca+abalacabaca+&user-job=foda&user-job-description=muito+foda&user-start-date=26%2F08%2F2010#

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

const staticElement = {
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

window.onload = () => {
  generateStates(stateInitials, brazilStates);
};
