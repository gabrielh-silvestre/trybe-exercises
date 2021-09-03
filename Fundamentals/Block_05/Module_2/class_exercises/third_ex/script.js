function getById(id) {
    return document.getElementById(id);
}

function getFatherElement(element) {
    return element.parentElement;
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
    
})
