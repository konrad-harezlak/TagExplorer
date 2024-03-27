const express = require('express');
const router = express.Router();
const tagController = require('./tagController')


router.get('/', (req, res) => {
  res.send('Witaj, świecie!');
});

router.get('/fetchTags', tagController.fetchTags)

module.exports = router;
