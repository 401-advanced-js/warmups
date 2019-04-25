'use strict';

const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
  res.status(200).send('hello');
});
router.post('/save', (req, res, next) => {
  res.status(200);
  console.log(req.body().toJson());
  res.send('Data recieved');
});
