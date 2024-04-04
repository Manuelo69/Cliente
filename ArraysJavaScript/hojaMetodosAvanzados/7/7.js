var array = new Array(7,9,3,2,45);

function Copia(array) {
   var array2 = new Array(array.length);
   array2 = array.slice(); 
   return array2
}

function sumaUno(array) {
    return array.map(sumar);
}

function sumar(num) {
    return num + 1;
}

function visualiza(array) {
    return array.join(" - ");
}
var array2 = sumaUno(array);

document.write(visualiza(array));
document.write("</br>");
document.write(visualiza(array2));