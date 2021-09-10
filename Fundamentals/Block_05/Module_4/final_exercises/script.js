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
    const body = selectOne('body').style;
    const changeElements = {
        changeBgColor: selectOne('#bg-color-selector'),
        changeTextColor: selectOne('#text-color-selector'),
        changeFontSize: selectOne('#font-size-selector'),
        changeLineHeight: selectOne('#line-height-selector'),
        changeFont: selectAll('.btn-customize'),
        resetingPage: selectAll('.btn')
    }

    function applyingSavedData() {
        body.backgroundColor = localStorage.backgroundColor;
        body.color = localStorage.color;
        body.fontSize = localStorage.fontSize;
        body.fontFamily = localStorage.fontFamily;
        body.lineHeight = localStorage.lineHeight;
    }

    function savingData() {
        localStorage.backgroundColor = body.backgroundColor;
        localStorage.color = body.color;
        localStorage.fontSize = body.fontSize;
        localStorage.fontFamily = body.fontFamily; 
        localStorage.lineHeight = body.lineHeight; 
    }

    applyingSavedData();

    changeElements.changeBgColor.addEventListener('input', (event) => {
        body.backgroundColor = `${event.target.value}`;
        savingData();
    });

    changeElements.changeTextColor.addEventListener('input', (event) => {
        body.color = `${event.target.value}`;
        savingData();
    });

    changeElements.changeFontSize.addEventListener('keyup', (event) => {
        if (event.which === 13) {
            body.fontSize = `${event.target.value}px`;
            savingData();
        }
    });

    changeElements.changeLineHeight.addEventListener('keyup', (event) => {
        if (event.which === 13) {
            body.lineHeight = `${event.target.value}px`;
            savingData();
        }
    });

    changeElements.changeFont.forEach((fontOption) => {
        fontOption.addEventListener('click', (event) => {
            switch(event.target.innerText) {
                case 'Arial':
                    body.fontFamily = 'Arial';
                    savingData();
                    break
                case 'Georgia':
                    body.fontFamily = 'Georgia';
                    savingData();
                    break
                case 'monospace':
                    body.fontFamily = 'monospace';
                    savingData();
                    break
                default:
                    body.fontFamily = '"Times New Roman"';
                    savingData();
                }
        })
    })

    changeElements.resetingPage.forEach((resetOption) => {
        resetOption.addEventListener('click', (event) => {
            switch(event.target.innerText) {
                case 'reset de cor':
                    body.backgroundColor = '#FFFFFF';
                    body.color = '#000000';
                    savingData();
                    break
                case 'reset de texto':
                    body.fontFamily = '"Times New Roman"';
                    body.fontSize = '16px';
                    body.lineHeight = 'normal';
                    savingData();
                    break
                default:
                    body.backgroundColor = '#FFFFFF';
                    body.color = '#000000';
                    body.fontSize = '16px';
                    body.fontFamily = '"Times New Roman"';
                    body.lineHeight = 'normal';
                    savingData();
            }
        })
    })
}
