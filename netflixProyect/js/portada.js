var user =  JSON.parse(localStorage.getItem("usuario"));
if(user) {
    window.location.href="index.html";
}
function irLogin() {
    window.location.href = "login.html";
}