

function CrearArray() {
    var array = new Array(5);
    for (let i = 0; i < array.length; i++) {
       var valor = prompt(`Introduce un valor para el array`);
       array[i] = valor;    
   } 
   return array;   
}

function Copia(array) {
   var array2 = new Array(array.length);
   array2 = array.slice(); 
   return array2
}

function Cambiar(array, value, start, how) {
  return array.fill(value,start,how+start);  
}
function visualiza(array) {
    return array.join(" - ");
}

var arr = CrearArray();
var arr2 = Copia(arr);
document.write("array1: ");
document.write(visualiza(arr));
document.write("</br>");
document.write("array2: ");
document.write(visualiza(arr2));
document.write("</br>")
document.write("array cambiado: ");
document.write(Cambiar(arr,0,2,2));
