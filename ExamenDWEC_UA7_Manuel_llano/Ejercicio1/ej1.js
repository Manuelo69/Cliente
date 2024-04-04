addEventListener('load', cargar, false);
var todosInputs;
function cargar() {
    //llenar select de opciones
    var divPrincipal = document.querySelector("div");
    for (let i = 0; i < 5; i++) {
        let inputCreado = document.createElement("input");
        inputCreado.type = "text";
        inputCreado.id = i;
        divPrincipal.appendChild(inputCreado);
        inputCreado.addEventListener("keyup", cambiar, false);
    }
    todosInputs = document.querySelectorAll("input");
}

function cambiar(e) {
    if (e.which == 13) {
        e.target.value = "";
        for (let i = 0; i < todosInputs.length; i++) {
            if (e.target.id == i) {
                todosInputs[i + 1].focus();
            }
        }
    }
}