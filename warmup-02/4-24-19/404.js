'use strict';

const express = require('express');
const router = express.Router();

router.get('/*', (req, res, next) => {
  res.status(404).send('Couldnt find what you lookin for');
});
