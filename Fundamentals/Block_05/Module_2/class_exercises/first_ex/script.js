function accessById(id) {
    return document.getElementById(id);
}

function getFatherElement(element) {
    return element.parentNode;
}

const ondeEstou = accessById('elementoOndeVoceEsta');
const elementoPai = getFatherElement(ondeEstou);
elementoPai.style.color = 'blue';