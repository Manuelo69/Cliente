addEventListener('load', cargar, false);

function cargar() {
    var sect1 = document.querySelector("section");    
    clonar.addEventListener("click", function () {
        var clonado = sect1.cloneNode(true);
        document.body.appendChild(clonado);
    }, false);
}