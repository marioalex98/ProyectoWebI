var conector = require('../postgres/postgres');
var episodio = {
    selectAll : function (request,res){
        var query = 'select * from episodio';
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
                    episodios:datos.rows
                });
            }
        });
    },
    get: function(request, res) {
        var id = request.params.idTemporada;
        var query = 'select * from episodio where temporadaid = ' + id;
        conector.conectar();
        conector.ejecutarQuery(query, (err, datos)=>{
            return res.status(200).send({
                episodios:  datos.rows
            });
        });
    },
    getEpisodio: function(request, res) {
        var id = request.params.idEpisodio;
        var query = 'select * from episodio where episodioid = ' + id;
        conector.conectar();
        conector.ejecutarQuery(query, (err, datos)=>{
            return res.status(200).send({
                episodio:  datos.rows[0]
            });
        });
    }

}
module.exports = episodio;