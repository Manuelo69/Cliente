


function convertir(){
    var cadena = prompt(`Introduce texto separado por comas`);
    var array = [];
    array.push(cadena);
    var arraySeparado = cadena.split(',');
    return arraySeparado;
}

function visualiza(array) {
    return array.join(" - ");
}

var arr = convertir();
document.write(visualiza(arr));