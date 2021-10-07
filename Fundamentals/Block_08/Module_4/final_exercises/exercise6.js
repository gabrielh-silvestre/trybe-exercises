const students = ['Pedro Henrique', 'Miguel', 'Maria Clara'];
const grades = [[9, 8, 10, 7, 5], [10, 9, 9, 10, 8], [10, 7, 10, 8, 9]];

const getAverage = (notes) => notes.reduce((acc, curr) => acc + curr) / notes.length;

function studentAverage(students, grades) {
  return students.map((student, i) => {
    return {
      name: student,
      average: getAverage(grades[i]),
    }
  });
}

const expected = [
  { name: 'Pedro Henrique', average: 7.8 },
  { name: 'Miguel', average: 9.2 },
  { name: 'Maria Clara', average: 8.8 },
];
