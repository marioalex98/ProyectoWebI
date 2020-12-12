var conector = require('../postgres/postgres');
var serie = {
    selectAll : function (request,res){
        var query = 'select * from serie';
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
                    series:datos.rows
                });
            }
        });
    },
    get: function(request, res) {
        var id = request.params.idSerie;
        var query = 'select * from serie where serieid = ' + id;
        conector.conectar();
        conector.ejecutarQuery(query, (err, datos)=>{
            return res.status(200).send({
                serie:  datos.rows[0]
            });
        });
    }

}
module.exports = serie;