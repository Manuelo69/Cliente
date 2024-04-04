addEventListener('load', cargar, false);
var arrFicheros;
function cargar() {
    arrFicheros = new Array("datos.txt","datos2.txt","datos3.txt");
    ficheros.addEventListener("change", envioform, false)
}

function envioform() {
    var xhr;
    if (window.XMLHttpRequest) {
        xhr = new XMLHttpRequest();
    } else if (window.ActiveXObject) {
        xhr = new ActiveXObject("Microsoft.XMLHTTP");
    }
    xhr.open('GET', arrFicheros[ficheros.selectedIndex], true);
    xhr.send(null);
    xhr.onreadystatechange = muestracontenido;

    function muestracontenido() {
        if (xhr.readyState == 4) {
            if (xhr.status == 200) {
                document.getElementById('dyn').value = "Recibido:" + xhr.responseText;
            }
            else {
                document.getElementById('dyn').value = "Codigo de error " + xhr.status;
            }
        }
    };
}