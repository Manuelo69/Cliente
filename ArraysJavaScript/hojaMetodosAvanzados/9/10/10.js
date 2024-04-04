var array = new Array(3,5,6,200,7,8,65,43);


function extremo(array){
 var ordenado = array.sort(function ord(a, b) {return a - b});
 var menor = array[0];
 var mayor = array[array.length-1];
 return [ordenado,menor,mayor];
}

function visualiza(array) {
    return array.join(" - ");
}

 [ord,men,may] = extremo(array);
 document.write(visualiza(ord));
 document.write("</br>");
 document.write(`Menor del array: ${men}`);
 document.write("</br>");
 document.write(`Mayor del array: ${may}`);