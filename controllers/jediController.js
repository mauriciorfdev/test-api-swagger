const {
  getAllJedis,
  getJediById,
  createJedi,
  updateJediById,
  deleteJediById,
} = require('../services/jediService');

const getJedis = (req, res) => {
  return res.json(getAllJedis());
};

const getJedi = (req, res) => {
  const jedi = getJediById(parseInt(req.param.id));
  if (!jedi) {
    return res.status(404).json({ msg: 'Jedi Not Found' });
  }
  return res.status(200).json(jedi);
};

const addJedi = (req, res) => {
  if (!req.body.name) {
    return res.status(400).send({ msg: 'error: name Not Found' });
  }
  const newJedi = createJedi(req.body.name);
  return res.status(201).send(newJedi);
};

const editJedi = (req, res) => {
  if (!req.body.name) {
    return res.status(400).send({ msg: 'error: name Not Found' });
  }
  const updatedJedi = updateJediById(parseInt(req.params.id), req.body.name);
  if (!updatedJedi) {
    return res
      .status(404)
      .send({ msg: `Jedi with id: ${req.params.id} not found` });
  }
  return res.status(200).json(updatedJedi);
};

const removeJedi = (req, res) => {
  const jedi = getJediById(parseInt(req.params.id));
  if (!jedi) {
    return res
      .status(404)
      .json({ msg: `Jedi with id:${req.params.id} not found` });
  }
  deleteJediById(parseInt(req.params.id));
  return res.status(200).json({ msg: `Jedi with id:${req.params.id} deleted` });
};

module.exports = { getJedis, getJedi, addJedi, editJedi, removeJedi };
