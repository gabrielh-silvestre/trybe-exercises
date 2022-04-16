const {
  getAllTalkers,
  getOneTalker,
  createTalker,
  updateTalker,
  removeTalker,
  getTalkersByTerm,
} = require('../service/talkerService');

const listAllTalkers = async (_req, res) => {
  const { status, message, talkers } = await getAllTalkers();

  return res.status(status).json(message ? { message } : talkers);
};

const listOneTalker = async (req, res) => {
  const { id } = req.params;
  const { status, message, talker } = await getOneTalker(id);

  return res.status(status).json(message ? { message } : talker);
};

const addTalker = async (req, res) => {
  const { name, age, talk } = req.body;
  const { status, message, newTalker } = await createTalker({ name, age, talk });

  if (message) {
    return res.status(status).json({ message });
  }

  return res.status(status).json(newTalker);
};

const editTalker = async (req, res) => {
  const { name, age, talk } = req.body;
  const { id } = req.params;
  const { status, message, updatedTalker } = (
    await updateTalker({ id, talker: { name, age, talk } })
  );

  if (message) {
    return res.status(status).json({ message });
  }

  return res.status(status).json(updatedTalker);
};

const deleteTalker = async (req, res) => {
  const { id } = req.params;
  const { status, message } = await removeTalker({ id });

  if (message) {
    return res.status(status).json({ message });
  }

  return res.status(status).end();
};

const searchTalkersByTerm = async (req, res) => {
  const { q } = req.query;
  const { status, message, talkers } = await getTalkersByTerm({ term: q });

  if (message) {
    return res.status(status).json({ message });
  }

  return res.status(status).json(talkers);
};

module.exports = {
  listAllTalkers,
  listOneTalker,
  addTalker,
  editTalker,
  deleteTalker,
  searchTalkersByTerm,
};
