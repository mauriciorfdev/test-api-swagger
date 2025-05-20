const express = require('express');
const {
  getJedis,
  addJedi,
  getJedi,
  editJedi,
  removeJedi,
} = require('../../controllers/jediController');

const router = express.Router();

router.get('/jedis', getJedis);

router.get('/jedis/:id', getJedi);

router.post('/jedis', addJedi);

router.put('/jedis/:id', editJedi);

router.delete('/jedis/:id', removeJedi);

module.exports = router;
