var array = new Array(3,5,6,2,7,8);

function extremo(){
 var ordenado = array.sort();
 var menor = array[0];
 var mayor = array[array.length-1];
 return [ordenado,menor,mayor];
}

function visualiza(array) {
    return array.join(" - ");
}

 [ord,men,may] = extremo();
 document.write(visualiza(ord));
 document.write("</br>");
 document.write(`Menor del array: ${men}`);
 document.write("</br>");
 document.write(`Mayor del array: ${may}`);