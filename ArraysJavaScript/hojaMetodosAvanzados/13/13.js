var numeros = new Array(6,3,4,76,43,27,9);
var pares = [];
var impares = [];

function parImpar() {
    var pares = numeros.filter(par);
    var impares = numeros.filter(impar);
    return [pares,impares];
}

function visualiza(array) {
    return array.join(" - ");
}

function par(num) {
    return num%2==0;
}

function impar(num) {
    return num%2==1;
}

[pares,impares] = parImpar();
document.write(visualiza(pares));
document.write("</br>");
document.write(visualiza(impares));
