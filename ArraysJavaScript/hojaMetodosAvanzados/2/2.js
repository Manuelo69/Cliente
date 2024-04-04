function crearArray() {
    var array = new Array(10);
    var pares = 2;
    for (let i = 0; i < array.length; i++) {
        array[i] = pares;
        pares = pares + 2;

    }
    return array;
}

function duplicar(num) {
    return num * 2;
}

function Multi(array) {
    return array.map(duplicar);
}
function visualiza(array) {
    return array.join(" - ");
}

var array = crearArray();
document.write(visualiza(array));
document.write("</br>");
var array2 = Multi(array);
document.write(visualiza(array2));
