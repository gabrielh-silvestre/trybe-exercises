function getFirstElement(element) {
    return document.querySelector(element);
}

function getAllElements(element) {
    return document.querySelectorAll(element);
}

function elementCreation(tag) {
    const tempElement = document.createElement(tag);
    return tempElement;
}

function addContent(htmlElement, content) {
    return htmlElement.innerText = content;
}

function addClassesInElement(htmlElement, classes) {
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
}
addingH1InBody(); // ex 1

function addingMainInBody() {
    const body = getFirstElement('body');
    const main = elementCreation('main');
    addClassesInElement(main, 'main-content');
    plugInHtml(body, main);
}
addingMainInBody(); // ex 2

function addingSectionInMain() {
    const main = getFirstElement('main');
    const section = elementCreation('section');
    addClassesInElement(section, 'center-content');
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
    addClassesInElement(section, 'left-content');
    plugInHtml(main, section);
}
addingLeftSectionInMain(); // ex 5

function addingRightSectionInMain() {
    const main = getFirstElement('main');
    const section = elementCreation('section');
    addClassesInElement(section, 'right-content');
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

function addingH3InMain() {
    const main = getFirstElement('main');
    for (let i = 0; i < 3; i += 1) {
        const h3 = elementCreation('h3');
        plugInHtml(main, h3);
    }
}
addingH3InMain(); // ex 9

function addingClassInH1() {
    const h1 = getFirstElement('h1');
    addClassesInElement(h1, 'title');
}
addingClassInH1() // ex 1 pt 2

function addingClassH3() {
    const h3 = getAllElements('h3');
    for (let tag of h3) {
        addClassesInElement(tag, 'description');
    }
}
addingClassH3(); // ex 2 pt 2
