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

function createDaysOfDezember() {
  const dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];
  const daysContainer = selectingOne('#days');

  dezDaysList.forEach((date) => {
    let newDay = elementCreate('li');
    newDay.innerText = date;
    classAdd(newDay, 'day');
    htmlPlug(daysContainer, newDay);
  });
}
createDaysOfDezember();
