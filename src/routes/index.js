const express = require('express');
const routes = express.Router();

const v1routes = require('./v1/index');

routes.use('/v1', v1routes);

module.exports = routes;