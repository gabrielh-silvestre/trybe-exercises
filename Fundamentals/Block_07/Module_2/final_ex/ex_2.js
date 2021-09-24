const lesson1 = {
  materia: 'Matemática',
  numeroEstudantes: 20,
  professor: 'Maria Clara',
  turno: 'manhã',
};

const lesson2 = {
  materia: 'História',
  numeroEstudantes: 20,
  professor: 'Carlos',
};

const lesson3 = {
  materia: 'Matemática',
  numeroEstudantes: 10,
  professor: 'Maria Clara',
  turno: 'noite',
};

const addingTurn = (obj, newKey, newValue) => {
  obj[newKey] = newValue;
};
addingTurn(lesson2, 'turno', 'noite');

const listKeys = (obj) => {
  console.log(Object.keys(obj));
}
// listKeys(lesson1);

const listValues = (obj) => {
  console.log(Object.values(obj));
}
// listValues(lesson3);

const allLesson = (l1, l2, l3) => { 
  const compactedLessons = {
    lesson1: {},
    lesson2: {},
    lesson3: {},
  }

  Object.assign(compactedLessons['lesson1'], l1);
  Object.assign(compactedLessons['lesson2'], l2);
  Object.assign(compactedLessons['lesson3'], l3);

  return compactedLessons;
};
// console.log(allLesson(lesson1, lesson2, lesson3));

const getTotalStudents = (obj) => {
  const lessonsArr = Object.entries(obj);
  let numberStudents = 0;
  lessonsArr.forEach((lesson) => {numberStudents += lesson[1]['numeroEstudantes']});

  return numberStudents;
};
// console.log(getTotalStudents(allLesson(lesson1, lesson2, lesson3)));

const getValueIndex = (obj, index) => Object.values(obj)[index];
// console.log(getValueIndex(lesson1, 0));

const CheckPair = (obj, key, value) => {
  const posKey = Object.keys(obj).indexOf(key);
  const respectiveValue = Object.values(obj)[posKey];

  return respectiveValue === value;
};
// console.log(CheckPair(lesson3, 'turno', 'noite'));
