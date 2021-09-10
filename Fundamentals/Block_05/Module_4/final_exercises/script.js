// DOM Element intrective functions

function selectOne(element) {
    return document.querySelector(element);
}

function selectAll(element) {
    return document.querySelectorAll(element);
}

function createElement(tag) {
    document.createElement(tag);
}

function plugHtml(fatherElement, sonElement) {
    fatherElement.appendChild(sonElement);
}

function addClass(element ,classe) {
    element.classList.add(classe);
}

function removeClass(element, classe) {
    element.classList.remove(classe);
}

window.onload = () => {
    // load HTML elements
    const body = selectOne('body');
    const changeBgColor = selectOne('#bg-color-selector');
    const changeTextColor = selectOne('#text-color-selector');
    const changeFontSize = selectOne('#font-size-selector');

    changeBgColor.addEventListener('input', (event => {
        body.style.backgroundColor = `${event.target.value}`  ;      
    }))

    changeTextColor.addEventListener('input', (event) => {
        body.style.color = `${event.target.value}`;
    })

    changeFontSize.addEventListener('keyup', (event) => {
        if (event.which === 13) {
            body.style.fontSize = `${event.target.value}px`;
        }
    })
}
