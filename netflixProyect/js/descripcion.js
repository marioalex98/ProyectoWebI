var user =  JSON.parse(localStorage.getItem("usuario"));
if(!user) {
    window.location.href="login.html";
}
var serieId = getParameterByName("idSerie");
fetch('http://localhost:3000/api/series/' + serieId)
    .then(response => response.json())
    .catch(error => console.error('Error:', error))
    .then(data => { obtenerDatos(data.serie)});

fetch('http://localhost:3000/api/temporadas/' + serieId)
    .then(response => response.json())
    .catch(error => console.error('Error:', error))
    .then(data => { obtenerDatosTemporada(data)});

function obtenerDatos(data){
    console.log(data);
    let html = "";
    html += "<h1>"+data.nombreserie+"</h1> <div class='imagen-serie'> <img src='"+data.urlimagen+"' alt='imagenserie'></div><h2>Descripcion</h2><p class='resumen'>"+data.descripcion+"</p>";
    $("#cabecera").html(html);
}
function obtenerDatosTemporada(data) {
    console.log(data);
    let html = "";
    for (let index = 0; index < data.temporadas.length; index++) {
        const element = data.temporadas[index];
        html += "<li onclick='obtenerEpisodio("+element.temporadaid+")'>"+element.nombretemporada+"</li>";
    }
    $("#listTemporada").html(html);
}
function obtenerEpisodio(temporadaId) {
    fetch('http://localhost:3000/api/episodios/' + temporadaId)
    .then(response => response.json())
    .catch(error => console.error('Error:', error))
    .then(data => { rellenarEpisodios(data); });

}
function rellenarEpisodios(data) {
    console.log(data);
    let htmlEmer = "no Tiene Episodio";
    let html = "";
    let bandera = false;
    for (let index = 0;  index < data.episodios.length; index++) {
        const element = data.episodios[index];
        let cadena = "" +element.youtubevideoid;
        html += '<li onclick="cambiarVideo('+element.episodioid+')">'+element.titulo+'</li>';
        bandera = true;
    }
    if(bandera){
        $("#listEpisodio").html(html);
    }else {
        $("#listEpisodio").html(htmlEmer);
    }
}
function cambiarVideo(enlace) {
    console.log(enlace);
    fetch('http://localhost:3000/api/episodio/' + enlace)
    .then(response => response.json())
    .catch(error => console.error('Error:', error))
    .then(data => { 
        html = "";
        html += "<iframe width='560' height='315' src='https://www.youtube.com/embed/"+data.episodio.youtubevideoid+"' frameborder='0' allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture' allowfullscreen></iframe>"
        $("#elVideo").html(html);
    });
    
}
function getParameterByName(name) {
    name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
    var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
    results = regex.exec(location.search);
    return results === null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
}
function salir() {
    localStorage.setItem("usuario", null);
    window.location.href = "login.html"; 
}