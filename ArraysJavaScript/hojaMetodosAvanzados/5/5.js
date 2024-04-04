var array = new Array(7,9,3,2,45);


function sumaTotal(total, num) {
    return total + num;
}

function sumaTotal(total, num) {
    return total+num;
}

function acortarArray(rango, fin){
    var recortado = array.slice(2,5);
    return recortado;
}

var recortado = acortarArray(2,4);
document.write(recortado.reduce(sumaTotal)/recortado.length);
