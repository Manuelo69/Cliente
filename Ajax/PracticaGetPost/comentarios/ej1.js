addEventListener('load', cargar, false);
var nombre;
var comentarios;
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
    nombre = nom.value;
    comentarios = com.value;
    var datos = new FormData();
    ruta = "php1.php";
    datos.append('nombre', nombre);
    datos.append('comentarios', comentarios);
    xhr.open('POST', ruta, true);
    xhr.send(datos);
    xhr.onreadystatechange = muestracontenido;

    function muestracontenido() {

        if (xhr.readyState == 4) {
            if (xhr.status == 200) {
                divInfo.innerHTML = "recibido " + xhr.responseText;
            }
            else {
                divInfo.innerHTML = "Codigo de error " + xhr.status;
            }
        }
    };
}