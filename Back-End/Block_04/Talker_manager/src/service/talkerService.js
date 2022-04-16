const {
  returnAllTalkers,
  returnOneTalker,
  addNewTalker,
  editTalker,
  deleteTalker,
  returnTalkerByTerm,
} = require('../model/talkerModel');
const {
  isDefinied,
  isMoreThenMinLength,
  isMoreThenMinNumber,
  haveFormat,
  isLessThenMaxNumber,
  isNull,
} = require('./genericService');

const getAllTalkers = async () => {
  try {
    const talkers = await returnAllTalkers();

    return { status: 200, talkers };
  } catch (err) {
    return { status: 500, message: err.message };
  }
};

const getOneTalker = async (id) => {
  try {
    const talker = await returnOneTalker(Number(id));

    if (talker) {
      return { status: 200, talker };
    }

    return { status: 404, message: 'Pessoa palestrante não encontrada' };
  } catch (err) {
    return { status: 500, message: err.message };
  }
};

const getTalkersByTerm = async ({ term }) => {
  try {
    const talkers = await returnTalkerByTerm(term);
    return { status: 200, talkers };
  } catch (err) {
    return { status: 500, message: err.message };
  }
};

const validTalkerName = (name) => {
  const MIN_NAME_LENGTH = 3;

  switch (false) {
    case isDefinied(name):
      return { message: 'O campo "name" é obrigatório' };
    case isMoreThenMinLength(MIN_NAME_LENGTH, name):
      return { message: 'O "name" deve ter pelo menos 3 caracteres' };
    default:
      return { message: null };
  }
};

const validTalkerAge = (age) => {
  const MIN_AGE = 18;

  switch (false) {
    case isDefinied(age):
      return { message: 'O campo "age" é obrigatório' };
    case isMoreThenMinNumber(MIN_AGE, age):
      return { message: 'A pessoa palestrante deve ser maior de idade' };
    default:
      return { message: null };
  }
};

const validWatchedAt = (watchedAt) => {
  const DATE_FORMAT = new RegExp(
    /^([0]?[1-9]|[1|2][0-9]|[3][0|1])[./-]([0]?[1-9]|[1][0-2])[./-]([0-9]{4}|[0-9]{2})$/,
  );

  return haveFormat(DATE_FORMAT, watchedAt);
};

const validRate = (rate) => {
  const MIN_RATE = 1;
  const MAX_RATE = 5;

  return (
    isMoreThenMinNumber(MIN_RATE, rate) && isLessThenMaxNumber(MAX_RATE, rate)
  );
};

const validTalkerTalk = (talk = { watchedAt: undefined, rate: undefined }) => {
  const { watchedAt, rate } = talk;

  switch (false) {
    case isDefinied(watchedAt, rate):
      return {
        message: 'O campo "talk" é obrigatório e "watchedAt" e "rate" não podem ser vazios',
      };
    case validWatchedAt(watchedAt):
      return {
        message: 'O campo "watchedAt" deve ter o formato "dd/mm/aaaa"',
      };
    case validRate(rate):
      return {
        message: 'O campo "rate" deve ser um inteiro de 1 à 5',
      };
    default:
      return { message: null };
  }
};

const validTalker = (talker) => {
  const { name, age, talk } = talker;

  const { message: nameMessage } = validTalkerName(name);
  const { message: ageMessage } = validTalkerAge(age);
  const { message: talkMessage } = validTalkerTalk(talk);

  if (isNull(nameMessage, ageMessage, talkMessage)) {
    return { status: 201 };
  }

  return { status: 400, message: nameMessage || ageMessage || talkMessage };
};

const createTalker = async (talker) => {
  const { status, message } = validTalker(talker);
  if (message) return { status, message };

  try {
    const newTalker = await addNewTalker(talker);
    return { status, newTalker };
  } catch (err) {
    return { status: 500, message: err.message };
  }
};

const updateTalker = async ({ id, talker }) => {
  const { status, message } = validTalker(talker);
  if (message) return { status, message };

  try {
    const updatedTalker = await editTalker(Number(id), talker);
    return { status: 200, updatedTalker };
  } catch (err) {
    return { status: 500, message: err.message };
  }
};

const removeTalker = async ({ id }) => {
  try {
    await deleteTalker(Number(id));
    return { status: 204 };
  } catch (err) {
    return { status: 500, message: err.message };
  }
};

module.exports = {
  getAllTalkers,
  getOneTalker,
  getTalkersByTerm,
  validTalker,
  createTalker,
  updateTalker,
  removeTalker,
};
