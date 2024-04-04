var array = new Array("azul", "amarillo", "rojo", "verde", "café", "rosa");

var color = prompt(`Introduce un color`);

var comprobar = array.indexOf(color);

if(comprobar!=-1){
    document.write(`El color ${color} se encuentra en el array`);
} else {
    document.write(`El color ${color} no se encuentra en el array`);
}