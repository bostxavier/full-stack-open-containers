const express = require('express');
const router = express.Router();
const redis = require('../redis')
const { getAsync } = require('../redis/index')

const configs = require('../util/config')

let visits = 0

/* GET index data. */
router.get('/', async (req, res) => {
  visits++

  res.send({
    ...configs,
    visits
  });
});

router.get('/statistics', async (_, res) => {
  const addedTodos = await getAsync('added_todos') || 0
  const stat = {
    added_todos: Number(addedTodos)
  }
  res.json(stat)
})

module.exports = router;
