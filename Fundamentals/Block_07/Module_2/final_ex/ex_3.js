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
