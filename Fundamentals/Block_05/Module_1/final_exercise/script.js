/*
Aqui você vai modificar os elementos já existentes utilizando apenas as funções:
- document.getElementById()
- document.getElementsByClassName()
- document.getElementsByTagName()
1. Crie uma função que mude o texto na tag <p> para uma descrição de como você se vê daqui a 2 anos. (Não gaste tempo pensando no texto e sim realizando o exercício)
2. Crie uma função que mude a cor do quadrado amarelo para o verde da Trybe (rgb(76,164,109)).
3. Crie uma função que mude a cor do quadrado vermelho para branco.
4. Crie uma função que corrija o texto da tag <h1>.
5. Crie uma função que modifique todo o texto da tag <p> para maiúsculo.
6. Crie uma função que exiba o conteúdo de todas as tags <p> no console.
*/

function textChanging(element, text) {
    const elementChange = document.getElementsByTagName(element)[1];
    elementChange.innerText = text;
}

function backgroundColorChanger(element, color)  {
    const elementChange = document.getElementsByClassName(element)[0];
    elementChange.style.backgroundColor = color;
}

function h1Changing(element, text) {
    const elementChange = document.getElementsByTagName(element)[0];
    elementChange.innerHTML = `<h1>${text}</h1>`;
}

function textUpperCase(element) {
    const elementChange = document.getElementsByTagName(element);
    for (let i of elementChange) { i.style.textTransform = 'uppercase'; }
}

function contentPrint(element) {
    const elementChange = document.getElementsByTagName(element);
    for (let i of elementChange) { console.log(i.innerText); }
}
