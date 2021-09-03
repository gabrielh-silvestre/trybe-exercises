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
