function getFirstByTagName(tag) {
    return document.getElementsByTagName(tag)[0];
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

function plugInHtml(fatherElement, newElement) {
    fatherElement.appendChild(newElement);
    return true;
}

function addingH1InBody() {
    const body = getFirstByTagName('body');
    const h1 = elementCreation('h1');
    addContent(h1, 'Exercício 5.2 - JavaScript DOM');
    plugInHtml(body, h1);
    return true;
}
addingH1InBody();

function addingMainInBody() {
    const body = getFirstByTagName('body');
    const main = elementCreation('main');
    addClassInElements(main, 'main-content');
    plugInHtml(body, main);
    return true;
}
addingMainInBody();

function addingSectionInMain() {
    const main = getFirstByTagName('main');
    const section = elementCreation('section');
    addClassInElements(section, 'center-content');
    plugInHtml(main, section);
}
addingSectionInMain();
