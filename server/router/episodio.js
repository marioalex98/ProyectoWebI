var express = require('express');
var episodioController = require('../controller/episodio');

var episodioRouter = express.Router();
episodioRouter.get('/episodios', episodioController.selectAll);
episodioRouter.get('/episodios/:idTemporada', episodioController.get);
episodioRouter.get('/episodio/:idEpisodio', episodioController.getEpisodio);

module.exports = episodioRouter;