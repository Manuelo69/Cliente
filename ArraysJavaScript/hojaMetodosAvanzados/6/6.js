var array = new Array(7,9,3,2,45);

function sumaUno(array) {
    return array.map(sumar);
}

function sumar(num) {
    return num + 1;
}

function visualiza(array) {
    return array.join(" - ");
}

var sumado = sumaUno(array);

document.write(visualiza(array));
document.write("</br>");
document.write(visualiza(sumado));