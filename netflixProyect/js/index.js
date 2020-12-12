var user =  JSON.parse(localStorage.getItem("usuario"));
if(!user) {
    window.location.href="login.html";
}
fetch('http://localhost:3000/api/series')
  .then(response => response.json())
  .catch(error => console.error('Error:', error))
  .then(data => { obtenerDatos(data)});
  function obtenerDatos(data){
    console.log(data);
    let html = "";
    let lista = data.series;
    for (let index = 0; index < lista.length; index++) {
        const item = lista[index];
        html += "<div><a href='descripcion.html?idSerie="+item.serieid+"'><p>"+item.nombreserie+"</p></a><br><div class='imagen-portada-thewalkingdead'><img src='"+item.urlimagen+"' alt='imagen-walkingdead-portada'></div></div>";
    }
    $("#lasSeries").html(html);
  }
  function salir() {
    localStorage.setItem("usuario", null);
    window.location.href = "login.html";
}