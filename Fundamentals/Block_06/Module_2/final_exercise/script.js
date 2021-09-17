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

const configMainForm = {
  rules: {
    name: {
      required: true,
      maxLength: 30,
      minLength: 4,
    },
    email: {
      required: true,
      email: true,
    },
    cpf: {
      required: true,
      function: (name, value) => {
        const regexCPF = /([0-9]{2}[\.]?[0-9]{3}[\.]?[0-9]{3}[\/]?[0-9]{4}[-]?[0-9]{2})|([0-9]{3}[\.]?[0-9]{3}[\.]?[0-9]{3}[-]?[0-9]{2})/
        return regexCPF.test(value);
      }
    },
    city: {
      required: true,
    },
    state: {
      required: true,
      function: (name, value) => {
        return value !== '';
      }
    },
    role: {
      required: true,
      minLength: 4,
      maxLength: 15,
    },
    date: {
      required: true,
      function: (name, value) => {
        const regexDate = /^(?:(?:31(\/|-|\.)(?:0?[13578]|1[02]))\1|(?:(?:29|30)(\/|-|\.)(?:0?[13-9]|1[0-2])\2))(?:(?:1[6-9]|[2-9]\d)?\d{2})$|^(?:29(\/|-|\.)0?2\3(?:(?:(?:1[6-9]|[2-9]\d)?(?:0[48]|[2468][048]|[13579][26])|(?:(?:16|[2468][048]|[3579][26])00))))$|^(?:0?[1-9]|1\d|2[0-8])(\/|-|\.)(?:(?:0?[1-9])|(?:1[0-2]))\4(?:(?:1[6-9]|[2-9]\d)?\d{2})$/;
        return regexDate.test(value);
      }
    }
  },
  messages: {
    name: {
      required: 'Digita seu nome',
      maxLength: 'Limite excedido',
      minLength: 'Min: 4 caracteres',
    },
    email: {
      required: 'Digite seu email',
      email: 'Digite um email válido',
    },
    cpf: {
      required: 'Digite seu CPF',
      function: 'Informe um CPF válido',
    },
    city: {
      required: 'Informe uma cidade',
    },
    state: {
      required: 'Selecione seu estado',
      function: 'Selecione seu estado',
    },
    role: {
      required: 'Informe seu cargo atual',
      minLength: 'Min: 4 caracteres',
      maxLength: 'Max 15 caracteres',
    },
    date: {
      required: 'Informe a data de início',
      function: 'Formato válido dd/mm/aaaa',
    }
  }
};

new window.JustValidate('#main-form', configMainForm);

window.onload = () => {
  generateStates(stateInitials, brazilStates);
};
