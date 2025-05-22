let jedis = [
  { id: 1, name: 'Luke Skywalker' },
  { id: 2, name: 'Obi-Wan Kenobi' },
  { id: 3, name: 'Yoda' },
];

const getAllJedis = () => jedis;

const getJediById = (id) => jedis.find((j) => j.id === id);

const createJedi = (name) => {
  const newJedi = { id: jedis.length + 1, name: name };
  jedis.push(newJedi);
  return newJedi;
};

const updateJediById = (id, name) => {
  const updatedJedi = getJediById(id);
  if (!updatedJedi) {
    return null;
  }
  updatedJedi.name = name;
  return updatedJedi;
};

const deleteJediById = (id) => {
  jedis = jedis.filter((jedi) => jedi.id !== id);
  return;
};

module.exports = {
  getAllJedis,
  getJediById,
  createJedi,
  updateJediById,
  deleteJediById,
};
