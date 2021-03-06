const firstLi = document.getElementById('first-li');
const secondLi = document.getElementById('second-li');
const thirdLi = document.getElementById('third-li');
const input = document.getElementById('input');
const myWebpage = document.getElementById('my-spotrybefy');

function verifierTech(arr) {
    for (let item of arr) {
        if (item.className === 'tech') {
            item.className = '';
        }
    }
}

window.onload = () => {
    const tecs = document.querySelectorAll('li');
    tecs.forEach((tec)=> {
        tec.addEventListener('click', inFocus);
    })

    const textBox = document.querySelector('#input');
    textBox.addEventListener('change', changeText);

    const subTitle = document.querySelector('#my-spotrybefy');
    subTitle.addEventListener('dblclick', toPortfolio);
    subTitle.addEventListener('mouseover', changeColor);
    subTitle.addEventListener('mouseleave', resetColor);
}

// 1. Copie esse arquivo e edite apenas ele;

// 2. Crie uma função que adicione a classe 'tech' ao elemento selecionado;
// 2.1. Deve existir apenas um elemento com a classe 'tech'. Como você faz isso?

function inFocus(event) {
    verifierTech(document.querySelectorAll('li'));
    event.target.className = 'tech';
}

// 3. Crie uma função que, ao digitar na caixa de texto, altere o texto do elemento
// com a classe 'tech';

function changeText(event) {
    const updateTech = event.target.value;
    document.querySelector('.tech').innerHTML += `\n <strong>${updateTech}</strong>`;
}

// 4. Crie uma função que, ao clicar duas vezes em 'Meu top 3 do Spotrybefy', ele
// redirecione para alguma página;
// 4.1. Que tal redirecionar para seu portifólio?

function toPortfolio(event) {
    window.location.assign('https://github.com/gabrielh-silvestre'); // função retirada do site https://love2dev.com/blog/ways-to-use-javascript-redirect-to-another-page/
}

// 5. Crie uma função que, ao passar o mouse sobre 'Meu top 3 do Spotrybefy', altere
// a cor do mesmo;

function changeColor(event) {
    event.target.style.color = '#2fc18c';
}

function resetColor(event) {
    event.target.style.color = 'white';
}

// Segue abaixo um exemplo do uso de event.target:


function resetText(event) {
  // O Event é passado como um parâmetro para a função.
  event.target.innerText = 'Opção reiniciada';
  // O event possui várias propriedades, porém a mais usada é o event.target,
  // que retorna o objeto que disparou o evento.
}

firstLi.addEventListener('dblclick', resetText);

// Não precisa passar o parâmetro dentro da callback resetText. O próprio
// navegador fará esse trabalho por você, não é legal? Desse jeito, o
// event.target na nossa função retornará o objeto 'firstLi'.