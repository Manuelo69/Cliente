addEventListener('load', cargar, false);
var cajaTexto;
var contador = 140;
var labelContador;
function cargar() {
    labelContador = document.querySelector("label");
    cajaTexto = document.querySelector("#minus");
    cajaTexto.addEventListener("keypress", detectar, false);
    cajaTexto.addEventListener("keyup", descontar, false)
}

function detectar(e) {
    if (e.charCode >= 48 && e.charCode <= 57) {
        e.preventDefault();
        labelContador.innerHTML = "Caracter no valido: números no permitidos";
    } else if (cajaTexto.value.length >= 140) {
        alert("Se ha llegado al limite de caracteres");
        e.preventDefault();
    } else {
        contador--;
        labelContador.innerHTML = "quedan " + contador + " posibles";
    }
}

function descontar(e) {
    if (e.which == 8||e.which == 127) {
        contador++;
        labelContador.innerHTML = "quedan " + contador + " posibles";
    }
}

