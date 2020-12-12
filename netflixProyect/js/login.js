var user =  JSON.parse(localStorage.getItem("usuario"));
if(user) {
    window.location.href="index.html";
}
function isLogin() {
    let email =  document.getElementById("email").value;
    let password =  document.getElementById("password").value;
    let obj = {
        usuario: email ,
        password: password
    }
    var url = 'http://localhost:3000/api/usuarios';

    fetch(url, {
    method: 'POST', // or 'PUT'
    body: JSON.stringify(obj), // data can be `string` or {object}!
    headers:{
        'Content-Type': 'application/json'
    }
    }).then(res => res.json())
    .catch(error => console.error('Error:', error))
    .then(response => {
        cargar(response);
    });

}
function cargar(response){
    console.log(response.usuario);
    if(!response.ok){
         alert(response.error); return;
        }
    if(!response.usuario) {
        alert("usuario no registrado!!");
        return;
    }
    localStorage.setItem("usuario", JSON.stringify(response.usuario));
    window.location.href ="index.html";
}