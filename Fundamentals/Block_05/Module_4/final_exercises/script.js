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
    const changeElements = {
        changeBgColor: selectOne('#bg-color-selector'),
        changeTextColor: selectOne('#text-color-selector'),
        changeFontSize: selectOne('#font-size-selector'),
        changeLineHeight: selectOne('#line-height-selector'),
        changeFont: selectAll('.btn-customize')
    }

    changeElements.changeBgColor.addEventListener('input', (event) => {
        body.style.backgroundColor = `${event.target.value}`;
    });

    changeElements.changeTextColor.addEventListener('input', (event) => {
        body.style.color = `${event.target.value}`;
    });

    changeElements.changeFontSize.addEventListener('keyup', (event) => {
        if (event.which === 13) {
            body.style.fontSize = `${event.target.value}px`;
        }
    });

    changeElements.changeLineHeight.addEventListener('keyup', (event) => {
        if (event.which === 13) {
            body.style.lineHeight = `${event.target.value}px`;
        }
    });

    changeElements.changeFont.forEach((fontOption) => {
        fontOption.addEventListener('click', (event) => {
            switch(event.target.innerText) {
                case 'Arial':
                    body.style.fontFamily = 'Arial';
                    break
                case 'Georgia':
                    body.style.fontFamily = 'Georgia';
                    break
                case 'monospace':
                    body.style.fontFamily = 'monospace';
                    break
                default:
                    body.style.fontFamily = '"Times New Roman"';
            }
        })
    })
}
