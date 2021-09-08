function createDaysOfTheWeek() {
    const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
    const weekDaysList = document.querySelector('.week-days');
  
    for (let index = 0; index < weekDays.length; index += 1) {
      const days = weekDays[index];
      const dayListItem = document.createElement('li');
      dayListItem.innerHTML = days;
  
      weekDaysList.appendChild(dayListItem);
    };
  };
  
  createDaysOfTheWeek();
  
  // Escreva seu código abaixo.

function selectingOne(node) {
  return document.querySelector(node);
}

function selectingAll(node) {
  return document.querySelectorAll(node);
}
  
function elementCreate(tag) {
  return document.createElement(tag);
}

function classAdd(element, newClass) {
  return element.className = newClass;
}

function htmlPlug(dadElement, newElement) {
  dadElement.appendChild(newElement);
}

  // Exercício 1
