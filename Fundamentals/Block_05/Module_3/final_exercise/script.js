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
  return element.className += `${newClass} `;
}

function htmlPlug(dadElement, newElement) {
  dadElement.appendChild(newElement);
}

  // Exercício 1

function createDaysOfDezember() {
  const dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];
  const daysContainer = selectingOne('#days');
  const dezHolidays = [24, 25, 31];
  const dezFridays = [4, 11, 18, 25];

  dezDaysList.forEach((date) => {
    let newDay = createDay(date, dezHolidays, dezFridays);
    htmlPlug(daysContainer, newDay);
  });
}
createDaysOfDezember();

function createDay(date, holidays, fridays) {
  let newDay = elementCreate('li');
  newDay.innerText = date;
  classAdd(newDay, 'day');
  isFriday(newDay, date, fridays)
  isHoliday(newDay, date, holidays);

  return newDay;
}

function isHoliday(dayElement ,date, holidays) {
  if (holidays.includes(date)) {
    classAdd(dayElement, 'holiday');
  }
}

function isFriday(dayElement ,date, fridays) {
  if (fridays.includes(date)) {
    classAdd(dayElement, 'friday');
  }
}

  // Exercício 2

function createHolidaysButton(str) {
  const dadButtons = selectingOne('.buttons-container');
  let newButton = elementCreate('button');

  newButton.innerText = str;
  newButton.id = 'btn-holiday';
  htmlPlug(dadButtons, newButton);
}
createHolidaysButton('Feriados');

  // Exercício 3

function highlightHolidays(arr) {
  arr.forEach((holiday) => {
    holiday.style.backgroundColor = 'green';
    holiday.style.color = 'white';
  });
}

function normalizeHolidays(arr) {
  arr.forEach((holiday) => {
    holiday.style.backgroundColor = 'rgb(238,238,238)';
    holiday.style.color = '#777';
  });
}

function highlightCheckerHoliday() {
  const allHolidays = selectingAll('.holiday');

  if (allHolidays[0].style.backgroundColor === 'green') {
    normalizeHolidays(allHolidays);
  } else {
    highlightHolidays(allHolidays);
  }
}

selectingOne('#btn-holiday').addEventListener('click', () => {
  highlightCheckerHoliday();
})

  // Exercício 4

function createFridaysButton(str) {
  const dadButtons = selectingOne('.buttons-container');
  let newButton = elementCreate('button');

  newButton.innerText = str;
  newButton.id = 'btn-friday';
  htmlPlug(dadButtons, newButton);
}
createFridaysButton('Sexta-feira');

  // Exercício 5

function highlightFridays(arr) {
  arr.forEach((friday) => {
    friday.style.backgroundColor = 'green';
    friday.style.color = 'white';
  });
}

function normalizeFridays(arr) {
  arr.forEach((friday) => {
    friday.style.backgroundColor = 'rgb(238,238,238)';
    friday.style.color = '#777';
  });
}

function highlightCheckerFriday() {
  const allFridays = selectingAll('.friday');

  if (allFridays[0].style.backgroundColor === 'green') {
    normalizeFridays(allFridays);
  } else {
    highlightFridays(allFridays);
  }
}

selectingOne('#btn-friday').addEventListener('click', () => {
  highlightCheckerFriday();
})

  // Exercício 6

function zoomIn(element) {
  element.style.fontSize = `40px`;
}

function zoomOut(element) {
  element.style.fontSize = `20px`;
}

const calendarDates = selectingAll('.day');

calendarDates.forEach((date) => {
  date.addEventListener('mouseover', (event) => {
    zoomIn(event.target);
  });

  date.addEventListener('mouseout', (event) => {
    zoomOut(event.target);
  })
})