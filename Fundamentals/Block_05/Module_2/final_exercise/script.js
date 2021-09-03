function elementCreation(tag) {
    const tempElement = document.createElement(tag);
    return tempElement;
}

function addContent(htmlElement, content) {
    return htmlElement.innerText = content;
}

function plugInHtml(fatherElement, newElement) {
    fatherElement.appendChild(newElement);
    return true;
}

function addingH1InBody() {
    const body = document.getElementsByTagName('body')[0];
    const h1 = elementCreation('h1');
    addContent(h1, 'Exercício 5.2 - JavaScript DOM');
    plugInHtml(body, h1);
    return true;
}
