var express = require('express');
var temporadaController = require('../controller/temporada');

var temporadaRouter = express.Router();
temporadaRouter.get('/temporadas', temporadaController.selectAll);
temporadaRouter.get('/temporadas/:idSerie', temporadaController.get);

module.exports = temporadaRouter;