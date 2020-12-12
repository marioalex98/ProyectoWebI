var app = require('./config');
var conector = require('./postgres/postgres');
conector.conectar();
var port = 3000;
  app.listen(port, () => {
      console.log('servidor corriendo');
  });