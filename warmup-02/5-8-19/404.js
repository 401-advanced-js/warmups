'use strict';

const express = require('express');

const router = express.Router()

router.get('', (req, res) => {
  res.status(404).send('Cant find that shit')
})

module.exports = router;