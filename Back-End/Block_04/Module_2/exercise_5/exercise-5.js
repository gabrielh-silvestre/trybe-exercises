const fs = require('fs/promises');

const STRING_ARR = ['Finalmente', 'estou', 'usando', 'Promise.all', '!!!'];

const createMultFiles = async () => {
  const createFilesArr = STRING_ARR.map((str, i) =>
    fs.writeFile(`./exercise_5/file${i + 1}.txt`, str)
  );

  return Promise.all(createFilesArr);
};

const centerInformation = async () => {
  await createMultFiles();
  const tempArr = [];

  for (let i = 1; i <= STRING_ARR.length; i += 1) {
    tempArr.push(fs.readFile(`./exercise_5/file${i}.txt`));
  }

  const solvedArr = await Promise.all(tempArr);

  fs.writeFile('./exercise_5/fileAll.txt', solvedArr.join(' '));
}

centerInformation();
