var express = require('express');
var usuarioController = require('../controller/usuario');

var usuarioRouter = express.Router();
usuarioRouter.get('/usuarios', usuarioController.selectAll);
usuarioRouter.get('/usuarios/:idusuario', usuarioController.get);
usuarioRouter.post('/usuarios',usuarioController.getLogin);
usuarioRouter.post('/usuario',usuarioController.insert);

module.exports = usuarioRouter;



