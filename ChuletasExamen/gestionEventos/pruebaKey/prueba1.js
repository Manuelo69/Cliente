addEventListener('load', cargar, false);
var cadena = "";
var divSelector;
function cargar() {
    divSelector = document.querySelector("div");
    document.addEventListener("keydown", mostrar, true);
    document.addEventListener("keypress", mostrar, false);
    document.addEventListener("keyup", mostrar, false);
}

function mostrar(e) {
    divSelector.innerHTML += e.type + "\n";
    divSelector.innerHTML += "Which " + e.which + " charcode: " + e.charCode +
        " keyCode " + e.keyCode + " tecla pulsada " + String.fromCharCode(e.keyCode) + "\n"+"\n";
}

