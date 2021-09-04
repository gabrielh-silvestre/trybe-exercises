function getFirstElement(element) {
    return document.querySelector(element);
}

function elementCreation(tag) {
    const tempElement = document.createElement(tag);
    return tempElement;
}

function addContent(htmlElement, content) {
    return htmlElement.innerText = content;
}

function addClassInElements(htmlElement, classes) {
    htmlElement.className = classes;
    return true;
}

function addAttributes(htmlElement, attribute, value) {
    htmlElement.setAttribute(attribute, value);
    return true;
}

function plugInHtml(fatherElement, newElement) {
    fatherElement.appendChild(newElement);
    return true;
}

function addingH1InBody() {
    const body = getFirstElement('body');
    const h1 = elementCreation('h1');
    addContent(h1, 'Exercício 5.2 - JavaScript DOM');
    plugInHtml(body, h1);
    return true;
}
addingH1InBody(); // ex 1

function addingMainInBody() {
    const body = getFirstElement('body');
    const main = elementCreation('main');
    addClassInElements(main, 'main-content');
    plugInHtml(body, main);
    return true;
}
addingMainInBody(); // ex 2

function addingSectionInMain() {
    const main = getFirstElement('main');
    const section = elementCreation('section');
    addClassInElements(section, 'center-content');
    plugInHtml(main, section);
}
addingSectionInMain(); // ex 3

function addingParagraphInSection() {
    const section = getFirstElement('section');
    const p = elementCreation('p');
    addContent(p, 'Sextou, sextando na sexta!');
    plugInHtml(section, p);
}
addingParagraphInSection(); // ex 4

function addingLeftSectionInMain() {
    const main = getFirstElement('main');
    const section = elementCreation('section');
    addClassInElements(section, 'left-content');
    plugInHtml(main, section);
}
addingLeftSectionInMain(); // ex 5

function addingRightSectionInMain() {
    const main = getFirstElement('main');
    const section = elementCreation('section');
    addClassInElements(section, 'right-content');
    plugInHtml(main, section);
}
addingRightSectionInMain(); // ex 6

function addingImgInLeftSection() {
    const sectionLeft = getFirstElement('.left-content');
    const img = elementCreation('img');
    addAttributes(img, 'src', 'https://picsum.photos/200');
    addAttributes(img, 'alt', 'várias fotos');
    plugInHtml(sectionLeft, img);
}
addingImgInLeftSection(); // ex 7

function addingUlInRightSection() {
    const sectionRight = getFirstElement('.right-content');
    const ul = elementCreation('ul');
    const numbers = ['um', 'dois', 'três', 'quatro', 'cinco', 'seis', 'sete', 'oito', 'nove', 'dez']
    plugInHtml(sectionRight, ul);
    for (let n of numbers) {
        const li = elementCreation('li');
        li.innerText = n;
        plugInHtml(ul, li);
    }
}
addingUlInRightSection(); // ex 8
