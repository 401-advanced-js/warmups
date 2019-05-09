'use strict';

const express = require('express');
const app = express();
const routes = require('./routes.js');
const notFound = require('./404.js');
const error = require('./500.js');

const port = process.env.PORT || 3000;

app.use(routes);
app.use(notFound);
app.use(error);

app.listen(port, () => console.log(`Listening on port: ${port}`))