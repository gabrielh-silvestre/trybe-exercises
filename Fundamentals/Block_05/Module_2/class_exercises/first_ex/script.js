function accessById(id) {
    return document.getElementById(id);
}

function getFatherElement(element) {
    return element.parentNode;
}

// req 2
const ondeEstou = accessById('elementoOndeVoceEsta');
const elementoPai = getFatherElement(ondeEstou);
elementoPai.style.color = 'blue';

// req 3
const primeiroFilhoFilho = accessById('primeiroFilhoDoFilho');
primeiroFilhoFilho.innerText = 'Lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem'

// req 4
