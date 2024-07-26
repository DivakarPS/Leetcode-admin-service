const express = require('express');

const ProblemRouter  = require('./problems.routes.js');

const v1Router = express.Router();

v1Router.use('/problems', ProblemRouter);

module.exports = v1Router;