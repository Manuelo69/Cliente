addEventListener('load', cargar, false);

function cargar() {
    //llenar select de opciones
    var div = document.querySelector("div");
    var contador = 1;
    boton.addEventListener("click", function () {
        let p = document.createElement("p");
        let texto = document.createTextNode(`Nuevo nodo nº${contador}`);
        p.appendChild(texto);
        div.appendChild(p);
        area.value = `${contador} nodos`;
        contador++;
    }, false);
}