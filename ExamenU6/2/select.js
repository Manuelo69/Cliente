addEventListener('load', cargar, false);
var indice = 0;
function cargar() {
    var sel = document.createElement("select");
    var label = document.querySelector("label");


    var nodoNuevo = 1;
    document.body.insertBefore(sel, boton1);
    boton1.addEventListener("click", crearSelect, false);
    sel.addEventListener("change", borrarOpcion, false);
    boton2.addEventListener("click", function () {
        var optArray = document.querySelectorAll("option");
        let opt = document.createElement("option");
        let texto = document.createTextNode(`Nuevo Nodo Nº${nodoNuevo}`);
        opt.appendChild(texto);
        opt.value = `Nuevo Nodo ${nodoNuevo}`;
        sel.insertBefore(opt, optArray[indice]);
        label.innerHTML = `opciones nuevas creadas: ${nodoNuevo}`;
        nodoNuevo++;
    }, false);
}

function crearSelect() {
    var sel = document.querySelector("select")
    for (let i = 0; i < 10; i++) {
        let opt = document.createElement("option");
        let texto = document.createTextNode(`opcion Nº${i + 1}`);
        opt.appendChild(texto);
        opt.value = `opcion ${i + 1}`;
        sel.appendChild(opt);
    }
}

function borrarOpcion() {
    var opt = document.querySelectorAll("option");
    indice = document.querySelector("select").selectedIndex;
    var confirmar = confirm(`¿Quieres borrar esta opcion?`);
    if (confirmar) {
        opt[indice].remove();
        alert(`Opcion numero ${indice + 1} borrada`)
    } else {
        alert(`No se borrará esta opción`)
    }
}
