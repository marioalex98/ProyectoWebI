var express = require('express');
var serieController = require('../controller/serie');

var serieRouter = express.Router();
serieRouter.get('/series', serieController.selectAll);
serieRouter.get('/series/:idSerie', serieController.get);

module.exports = serieRouter;