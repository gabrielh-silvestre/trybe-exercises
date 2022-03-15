const fs = require('fs/promises');

const writeContent = async (file, content) => {
  if (!file || !content) throw new Error('parâmetros "file" e "content" são obrigatórios');
  if (typeof file !== 'string') throw new Error('parâmetro "file" deve receber uma string');

  await fs.writeFile(file, content);
  return 'ok';
}

module.exports = { writeContent };
