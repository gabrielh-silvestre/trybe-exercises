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

const lessonsArr = [lesson1, lesson2, lesson3];

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

const lessonViwers = (obj, subject) => {
  const lessonsArr = Object.entries(obj);
  let viwers = 0;

  lessonsArr.forEach((lesson) => {
    if (lesson[1]['materia'] === subject) {
      viwers += lesson[1]['numeroEstudantes'];
    }
  });

  return viwers;
};
// console.log(lessonViwers(allLesson(...lessonsArr), 'Matemática'));

const createReport = (obj, professor) => {
  const lessonsArr = Object.entries(obj);
  const finalReport = {professor: '', aulas: [], estudantes: 0,};

  lessonsArr.forEach((lesson) => {
    if (lesson[1]['professor'] === professor) {
      finalReport.professor = lesson[1]['professor'];
      finalReport.aulas.push(lesson[1]['materia']);
      finalReport.estudantes += lesson[1]['numeroEstudantes'];
    }
  });

  return finalReport;
};
// console.log(createReport(allLesson(...lessonsArr), 'Maria Clara'));
