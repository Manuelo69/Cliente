addEventListener('load', cargar, false);
var cajaTexto;
function cargar() {
    cajaTexto = document.querySelector("#minus");
    cajaTexto.addEventListener("keypress", detectar, false);
}

function detectar(e) {
 if ((e.charCode >= 123 || e.charCode <= 96) && e.charCode != 241 && e.charCode != 32) {
        alert("Caracter no valido. " + String.fromCharCode(e.keyCode) + " Prueba con minusculas.");
        e.preventDefault();
    }
}

