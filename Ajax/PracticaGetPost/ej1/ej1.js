addEventListener('load', cargar, false);
var sel;
var opt
var horoscopo;
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
    sel = document.querySelector("select");
    opt = document.querySelectorAll("option");
    var datos = new FormData();
    horoscopo = opt[sel.selectedIndex].value;
    ruta = "php1.php";
    datos.append('cod', horoscopo);
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