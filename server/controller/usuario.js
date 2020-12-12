var conector = require('../postgres/postgres');
var usuario = {
    selectAll : function (request,res){
        var query = 'select * from usuario';
        conector.conectar();
        conector.ejecutarQuery(query, (err, datos)=>{
            if(err){
                res.status(400).json({
                    ok:false,
                    error:err
                });
            }else{
                res.json({
                    ok:true,
                    usuarios:datos.rows
                });
            }
        });
    },
    get: function(request, res) {
        var id = request.params.idusuario;
        var query = 'select * from usuario where usuarioid = ' + id;
        conector.conectar();
        conector.ejecutarQuery(query, (err, datos)=>{
            return res.status(200).send({
                usuario:  datos.rows[0]
            });
        });
    },
    getLogin: function(request, res) {
        var body = request.body;
        var correo = body.usuario;
        var password = body.password;
        var query = "select * from usuario where username ='" +correo+ "' and password = '"+password+"'";
        conector.conectar();
        conector.ejecutarQuery(query, (err, datos)=>{
            if(err){
                res.status(400).json({
                    ok:false,
                    error:err
                });
            }else{
                
                    res.json({
                        ok: true,
                        usuario:datos.rows[0]
                    });
                
            }
        });
    },
    insert: function(req, res){
        var body = req.body;
        var nombre = body.nombre;
        var correo = body.usuario;
        var password = body.password;
        var query = "insert into usuario values(default,'"+nombre+"','"+correo+"','"+password+"', default)";        conector.conectar();
        conector.ejecutarQuery(query, (err, datos)=>{
            if(err){
                res.status(400).json({
                    ok:false,
                    error:err
                });
            }else{
                
                    res.json({
                        ok: true,
                        usuario:datos.rows[0]
                    });
                
            }
        });
    }


}
module.exports = usuario;