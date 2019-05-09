'use strict';

const express = require('express');

const router = express.Router()

router.get('/', (req, res) => {
  res.send('hello');
})
router.post('/save', (req, res) => {
  res.send(req.body);
})

module.exports = router;