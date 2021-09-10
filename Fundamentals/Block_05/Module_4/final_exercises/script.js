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

    function dataPersistence() {
        body.backgroundColor = localStorage.backgroundColor;
        body.color = localStorage.color;
        body.fontSize = localStorage.fontSize;
        body.fontFamily = localStorage.fontFamily;
        body.lineHeight = localStorage.lineHeight;
    }

    dataPersistence();

    changeElements.changeBgColor.addEventListener('input', (event) => {
        body.backgroundColor = `${event.target.value}`;
        localStorage.setItem('backgroundColor', body.backgroundColor);
    });

    changeElements.changeTextColor.addEventListener('input', (event) => {
        body.color = `${event.target.value}`;
        localStorage.setItem('color', body.color);
    });

    changeElements.changeFontSize.addEventListener('keyup', (event) => {
        if (event.which === 13) {
            body.fontSize = `${event.target.value}px`;
            localStorage.setItem('fontSize', body.fontSize);
        }
    });

    changeElements.changeLineHeight.addEventListener('keyup', (event) => {
        if (event.which === 13) {
            body.lineHeight = `${event.target.value}px`;
            localStorage.setItem('lineHeight', body.lineHeight);
        }
    });

    changeElements.changeFont.forEach((fontOption) => {
        fontOption.addEventListener('click', (event) => {
            switch(event.target.innerText) {
                case 'Arial':
                    body.fontFamily = 'Arial';
                    localStorage.setItem('fontFamily', body.fontFamily);
                    break
                case 'Georgia':
                    body.fontFamily = 'Georgia';
                    localStorage.setItem('fontFamily', body.fontFamily);
                    break
                case 'monospace':
                    body.fontFamily = 'monospace';
                    localStorage.setItem('fontFamily', body.fontFamily);                    
                    break
                default:
                    body.fontFamily = '"Times New Roman"';
                    localStorage.setItem('fontFamily', body.fontFamily);
            }
        })
    })

    changeElements.resetingPage.forEach((resetOption) => {
        resetOption.addEventListener('click', (event) => {
            switch(event.target.innerText) {
                case 'reset de cor':
                    body.backgroundColor = '#FFFFFF';
                    body.color = '#000000';
                    localStorage.backgroundColor = body.backgroundColor;
                    localStorage.color = body.color;
                    break
                case 'reset de texto':
                    body.fontFamily = '"Times New Roman"';
                    body.fontSize = '16px';
                    body.lineHeight = 'normal';
                    localStorage.fontFamily = body.fontFamily;
                    localStorage.fontSize = body.fontSize;
                    localStorage.lineHeight = body.lineHeightal;
                    break
                default:
                    body.backgroundColor = '#FFFFFF';
                    body.color = '#000000';
                    body.fontSize = '16px';
                    body.fontFamily = '"Times New Roman"';
                    body.lineHeight = 'normal';
                    localStorage.backgroundColor = body.backgroundColor;
                    localStorage.color = body.color;
                    localStorage.fontSize = body.fontSize;
                    localStorage.fontFamily = body.fontFamily; 
                    localStorage.lineHeight = body.lineHeight; 
            }
        })
    })
}
