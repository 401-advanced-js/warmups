'use strict';

const express = require('express');

const router = express.Router()

router.get('', (err, req, res, next) => {
  res.status(500).send('I fucked up')
})

module.exports = router;