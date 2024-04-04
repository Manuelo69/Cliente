addEventListener('load', cargar, false);
var div;
var contenido;
function cargar() {
    enlace = document.querySelector("a");
    div = document.querySelector("div");
    enlace.addEventListener("click", envioform, false)


}

function envioform(e) {
    var xhr;
    if (window.XMLHttpRequest) {
        xhr = new XMLHttpRequest();
    } else if (window.ActiveXObject) {
        xhr = new ActiveXObject("Microsoft.XMLHTTP");
    }

    xhr.open('GET', "datospersonales.xml", true);
    xhr.send(null);
    xhr.onreadystatechange = muestracontenido;

    function muestracontenido() {
        if (xhr.readyState == 4) {
            if (xhr.status == 200) {
                div.innerHTML = "Recibido:" + xhr.responseXML;
                datos = xhr.responseXML;
                let nombre = datos.querySelector("nombre");
                let ape = datos.querySelector("apellido");
                let tel = datos.querySelector("telefono");
                let email = datos.querySelector("email");
                div.innerHTML = `${nombre.firstChild.nodeValue}`;
                div.innerHTML += `${ape.firstChild.nodeValue}
${tel.firstChild.nodeValue}
${email.firstChild.nodeValue}`;
            }
            else {
                div.innerHTML = "Codigo de error " + xhr.status;
            }
        }
    };
}