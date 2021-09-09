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
    friday.innerText = 'Sexta';
  });
}

function normalizeFridays(arr, fridays) {
  for (let i in arr) {
    arr[i].innerText = fridays[i];
  }
}

function highlightCheckerFriday() {
  const dezFridays = [4, 11, 18, 25];
  const allFridays = selectingAll('.friday');

  if (allFridays[0].innerText === 'Sexta') {
    normalizeFridays(allFridays, dezFridays);
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

  // Exercício 7

function createTask(dadElement, str) {
  let newTask = elementCreate('span');

  newTask.innerText= str;
  htmlPlug(dadElement, newTask);
}

const getTask = selectingOne('#btn-add');

getTask.addEventListener('click', () => {
  let taskContent = selectingOne('#task-input').value;

  createMyTaskContainer();
  putInMyTaskContainer(taskContent);
});

  // Exercício 8

function colorRandomizer() {
  return `rgb(${Math.random() * 200}, ${Math.random() * 200}, ${Math.random() * 200})`
}

function createSubtitle(dadElement) {
  // const dadSub = selectingOne('.my-tasks');
  let newSub = elementCreate('div');

  classAdd(newSub, 'task');
  newSub.style.backgroundColor = colorRandomizer();
  htmlPlug(dadElement, newSub);
}

function createMyTaskContainer() {
  const dadDiv = selectingOne('.my-tasks');
  let newContainer = elementCreate('div');
  
  classAdd(newContainer, 'my-task-container');
  htmlPlug(dadDiv, newContainer);
}

function putInMyTaskContainer(str) {
  const allDivs = selectingAll('.my-task-container');
  const lastDiv = allDivs[allDivs.length - 1];

  createTask(lastDiv, str);
  createSubtitle(lastDiv);
}
