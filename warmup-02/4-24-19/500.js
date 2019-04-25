'use strict';

const express = require('express');
const router = express.Router();

router.get('/error', (err, req, res, next) => {
  res.status(500).send('something went wrong');
});
