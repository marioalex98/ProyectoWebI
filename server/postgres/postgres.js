const { Client } = require('pg');

var connection;
var SQL = {
    
    conectar: function() {
        connection = new Client({
            user: 'postgres',
            host: 'localhost',
            database: 'netflix',
            password: 'root',
            port: 5432,
        });
          
          connection.connect( err => {
            if (err) throw err;
            console.log('Connected!');
            // creacion del servidor
          });
    },
    ejecutarQuery: function(query, callback) {
        connection.query(query,(err, result)=>{
            if(err){
                console.log(err);
                callback(err);
                return;
            }
            if(result.length===0){
                callback('el registro solicitado no exite');
            }else{
            callback(null,result);}
        });
    },
    desconectar: function() {
        connection.end();
        console.log('Desconenctado');
    }
};
module.exports = SQL;