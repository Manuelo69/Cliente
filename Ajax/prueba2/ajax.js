addEventListener('load', cargar, false);
var arrFicheros;
function cargar() {
    enlaces = document.querySelectorAll("a");
    for (let i = 0; i < enlaces.length; i++) {
        enlaces[i].addEventListener("click", envioform, false)
    }

}

function envioform(e) {
    var xhr;
    var url;
    if (window.XMLHttpRequest) {
        xhr = new XMLHttpRequest();
    } else if (window.ActiveXObject) {
        xhr = new ActiveXObject("Microsoft.XMLHTTP");
    }
    if (e.target.innerHTML == "Ejemplo1") {
        url = "ejemplo1.html";
    } else {
        url = "ejemplo2.html";
    }
    xhr.open('GET',url, true);
    xhr.send(null);
    xhr.onreadystatechange = muestracontenido;

    function muestracontenido() {
        if (xhr.readyState == 4) {
            if (xhr.status == 200) {
                document.querySelector("div").innerHTML= "Recibido:" + xhr.responseText;
            }
            else {
                document.querySelector("div").innerHTML = "Codigo de error " + xhr.status;
            }
        }
    };
}