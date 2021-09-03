function accessById(id) {
    return document.getElementById(id);
}

function getFatherElement(element) {
    return element.parentNode;
}

function getSonElement(element) {
    return element.children;
}

function getPreviousElement(element) {
    return element.previousElementSibling;
}

function getNextNode(element) {
    return element.nextElementSibling;
}

document.addEventListener('DOMContentLoaded', () => {
    // req 1
    const newElement = document.createElement('div');
    getFatherElement(accessById('elementoOndeVoceEsta')).appendChild(newElement);
})
