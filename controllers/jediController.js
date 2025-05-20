let jedis = [
  { id: 1, name: 'Luke Skywalker' },
  { id: 2, name: 'Obi-Wan Kenobi' },
  { id: 3, name: 'Yoda' },
];

const getJedis = (req, res) => {
  return res.json(jedis);
};

const getJedi = (req, res) => {
  const id = req.params.id;
  const jedi = jedis.find((jedi) => jedi.id == id);
  if (!jedi) {
    return res.status(404).json({ msg: 'Jedi not found' });
  }
  return res.status(200).json(jedi);
};

const addJedi = (req, res) => {
  if (!req.body.name) {
    return res.status(400).send({ msg: 'error - name not found' });
  }
  const newJedi = { id: jedis.length + 1, name: req.body.name };
  jedis.push(newJedi);
  return res.status(201).send(newJedi);
};

const editJedi = (req, res) => {
  const id = req.params.id;
  const jedi = jedis.find((jedi) => jedi.id == id);
  if (!jedi) {
    return res.status(404).json({ msg: 'Jedi not found' });
  }
  const { name } = req.body;
  jedi.name = name;
  return res.status(200).json(jedi);
};

const removeJedi = (req, res) => {
  const id = parseInt(req.params.id);
  const jedi = jedis.find((jedi) => jedi.id === id);
  if (!jedi) {
    return res.status(404).json({ msg: 'Jedi not found' });
  }
  jedis = jedis.filter((jedi) => jedi.id !== id);
  return res.json({ msg: `Jedi ${jedi.name} eliminado correctamente` });
};

module.exports = { getJedis, getJedi, addJedi, editJedi, removeJedi };
