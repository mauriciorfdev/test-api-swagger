const {
  getAllJedis,
  getJediById,
  createJedi,
  updateJediById,
  deleteJediById,
} = require('../services/jediService');

const getJedis = (req, res) => {
  return res.status(200).json(getAllJedis());
};

const getJedi = (req, res) => {
  const jedi = getJediById(parseInt(req.params.id));
  if (!jedi) {
    return res.status(404).json({ message: 'Jedi Not Found' });
  }
  return res.status(200).json(jedi);
};

const addJedi = (req, res) => {
  if (!req.body.name) {
    return res.status(400).send({
      error: 'Bad Request',
      details: [{ field: 'name', message: "The 'name' field is required" }],
    });
  }
  const newJedi = createJedi(req.body.name);
  return res.status(201).send(newJedi);
};

const editJedi = (req, res) => {
  if (!req.body.name) {
    return res.status(400).send({
      error: 'Bad Request',
      details: [{ field: 'name', message: "The 'name' field is required" }],
    });
  }
  const updatedJedi = updateJediById(parseInt(req.params.id), req.body.name);
  if (!updatedJedi) {
    return res
      .status(404)
      .send({ message: `Jedi with id: ${req.params.id} not found` });
  }
  return res.status(200).json(updatedJedi);
};

const removeJedi = (req, res) => {
  const jedi = getJediById(parseInt(req.params.id));
  if (!jedi) {
    return res
      .status(404)
      .json({ message: `Jedi with id:${req.params.id} not found` });
  }
  deleteJediById(parseInt(req.params.id));
  return res
    .status(200)
    .json({ message: `Jedi with id:${req.params.id} deleted` });
};

module.exports = { getJedis, getJedi, addJedi, editJedi, removeJedi };
