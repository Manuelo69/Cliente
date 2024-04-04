addEventListener('load', cargar, false);
var ruta;
var envio1;
var envio2;
var envio3;
var email
var contra1;
var contra2;
function cargar() {
    divInfo = document.querySelector("#info");
    boton1.addEventListener("click", envioform, false);
}

function envioform() {
    var xhr;
    if (window.XMLHttpRequest) {
        xhr = new XMLHttpRequest();
    } else if (window.ActiveXObject) {
        xhr = new ActiveXObject("Microsoft.XMLHTTP");
    }
    let url;
    var datos = new FormData();
    email = mail.value;
    contra1 = pass1.value;
    contra2 = pass2.value;
    datos.append('envioEmail', email);
    datos.append('envioContra1', contra1);
    datos.append('envioContra2', contra2);
    url = "php1.php";
    xhr.open('POST', url, true);
    xhr.send(datos);
    xhr.onreadystatechange = muestracontenido;

    function muestracontenido() {

        if (xhr.readyState == 4) {
            if (xhr.status == 200) {
                divInfo.innerHTML = "recibido "+ xhr.responseText;
            }
            else {
                divInfo.innerHTML = "Codigo de error " + xhr.status;
            }
        }
    };
}