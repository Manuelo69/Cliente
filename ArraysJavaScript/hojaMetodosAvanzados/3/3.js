var array = [];
addEventListener('load', cargar, false);

function cargar() {
boton.addEventListener("click",ver,false);
boton2.addEventListener("click",ver2,false);
}

function agregar(array){
 array.push(texto.value);
 return array; 
}

function ver() {
    array = agregar(array);
    area.value = array.join(" - ");
}

function ver2(){
area.value = array.filter(numerico);
}

function numerico(dato) {
    return !isNaN(parseFloat(dato));
}


