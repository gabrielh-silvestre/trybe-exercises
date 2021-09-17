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
