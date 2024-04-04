addEventListener('load', inicio, false);
/*frase de ejemplo: hola.buenas.tardes.como.estas*/
function inicio() {

    boton1.addEventListener("click", ver1, false);
    boton2.addEventListener("click", ver2, false);
    boton3.addEventListener("click", ver3, false);
    boton4.addEventListener("click", ver4, false);
    boton5.addEventListener("click", ver5, false);
}

function ver1() {
    var arrayCadena = extraer(cadena.value);
    var info = visualizar(arrayCadena);
    area.value = info;
}

function ver2() {
    var arrayCadena = extraer(cadena.value);
    var palabras = extraerPalabras(arrayCadena);
    area.value = palabras;
}

function ver3() {
    var arrayCadena = extraer(cadena.value);
    var larga = verMasLarga(arrayCadena);
    area.value = larga;
}

function ver4() {
    var arrayCadena = extraer(cadena.value);
    var mostrar = verFrasePorGuiones(arrayCadena);
    area.value = mostrar;
}

function ver5() {
   var palabraDividida = dividirPalabra(palabra.value);
   area.value = deletrear(palabraDividida);
}

function extraer(cad) {
    var array = cad.split(".");
    array.pop();
    return array;
}

function extraerPalabras(array) {

    var cadena = "";
    for (let i = 0; i < array.length; i++) {
        var arrayPalabras = array[i].split(" ");
        cadena += `palabras de la frase ${i + 1}:\n`
        for (let i = 0; i < arrayPalabras.length; i++) {
            cadena += `palabra ${i + 1}: ${arrayPalabras[i]}\n`;
        }
    }
    return cadena;
}

function visualizar(cad2) {
    var cadenaFinal = `hay un total de ${cad2.length} de frases`;
    for (let i = 0; i < cad2.length; i++) {
        cadenaFinal += `\nfrase numero ${i + 1}: ${cad2[i]} `;
    }
    return cadenaFinal;
}

function verMasLarga(array){
    var cadena = "";
    for (let i = 0; i < array.length; i++) {
        if (cadena.length < array[i].length) {
            cadena = `la frase más larga es \n ${array[i]}\n con una longitud de ${array[i].length} caracteres`;
        }
    }
    return cadena;
}

function verFrasePorGuiones(array) {
    var cadena = "";
    if (num.value>=0&&num.value<array.length) {
        var arrayPalabras = array[num.value].split(" ");
        cadena = `frase separada por guiones: \n ${arrayPalabras.join("-")}`;
    } else {
        cadena = `No es posible realizar esta acción debido al valor introducido`;
    }
    return cadena;
}

function dividirPalabra(cad) {
    return cad.split("");
}

function deletrear(array) {
    var cadena = "";
    cadena = `palabra deletreada normal: \n${array.join(" ")}\n`;
    var inverso = array.reverse();
    cadena += `palabra deletrada al revés: \n${inverso.join(" ")}`;
    return cadena;
}

