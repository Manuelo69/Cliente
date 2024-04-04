addEventListener('load', cargar, false);

var contadorPuntos = 0;
function cargar() {
    var input = document.querySelector("input");
    input.addEventListener("keypress", validacion, false);

}

function validacion(e) {
    if (e.which == 46 && contadorPuntos > 0) {
        alert("No se puede introducir el caracter ',' solo se admite una vez");
        e.preventDefault();
    } else if (e.which == 46) {
        contadorPuntos++;
    } else if (((e.which >= 58 || e.which <= 48) && e.which != 8)) {
        alert("Caracter no valido. " + String.fromCharCode(e.keyCode) + " Introduce numeros");
        e.preventDefault();
    } 
}