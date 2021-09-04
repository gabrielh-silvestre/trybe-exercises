const bigFather = document.getElementById('pai');
const bigFatherChildren = bigFather.childNodes;

for (let i = bigFatherChildren.length - 1; i >= 0; i -= 1) {

    if (bigFatherChildren[i].id !== 'elementoOndeVoceEsta') {
        bigFather.removeChild(bigFatherChildren[i]);
    }
}

let ondeEstouControl = bigFatherChildren[0].childNodes;

for (let i = ondeEstouControl.length -1; i >= 0; i -= 1) {
    if (ondeEstouControl[i].id !== 'primeiroFilhoDoFilho') {
        ondeEstouControl[i].remove();
    }
}
