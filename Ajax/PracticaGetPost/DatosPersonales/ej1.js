addEventListener('load', cargar, false);
var ruta;
var envio1;
var envio2;
var envio3;
var nombre
var apellidos;
var edad;
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
    nombre = nom.value;
    apellidos = ape.value;
    edad = eda.value;
    ruta = "php1.php";
    envio1 = "nombre=" + nombre;
    envio2 = "apellido=" + apellidos;
    envio3 = "edad=" + edad;
    url = ruta + "?" + envio1 + "&" + envio2 + "&" + envio3 ;
    xhr.open('GET', url, true);
    xhr.send(null);
    xhr.onreadystatechange = muestracontenido;

    function muestracontenido() {

        if (xhr.readyState == 4) {
            if (xhr.status == 200) {
                datos = JSON.parse(xhr.responseText);
                divInfo.innerHTML = "Nombre: "+ datos.nombre+"\n apellidos: "+datos.apellido+"\n edad: "+datos.edad;
            }
            else {
                divInfo.innerHTML = "Codigo de error " + xhr.status;
            }
        }
    };
}