var minus = new Array("lunes","martes","miercoles","jueves","viernes","sabado","domingo");
var mayus = [];
for (let i = 0; i < minus.length; i++) {
    let min1 = minus[i].substring(0,1);
    let min2 = minus[i].substring(minus[i].length-1,minus[i].length);
    let texto = minus[i].substring(1,minus[i].length-1);
    min1 = min1.toUpperCase();
    min2 = min2.toUpperCase();
    let cadenaFinal = min1.concat(texto.concat(min2));
    mayus.push(cadenaFinal);
}

document.write(mayus.join("/"));