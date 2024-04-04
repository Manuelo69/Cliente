addEventListener('load', cargar, false);

function cargar() {
    convertir.addEventListener("click", conversion, false);
}

function conversion() {
    var operaciones = [1000, 1000*60, 1000*60*60,1000*60*60*24];
    let cant = cantidad.value;
    var uni = document.getElementById("unidad").selectedIndex;
    var met = metodo.value;
    if (met == "um") {
       resultado.value = `Pasado a milisegundos es: ${cant*operaciones[uni]}` ;
    } else {
        resultado.value = `Pasado a ${unidad.value} es: ${cant/operaciones[uni]}`;
    }
}
