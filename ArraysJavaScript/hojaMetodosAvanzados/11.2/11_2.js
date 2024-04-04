var misterio =
["l",1,"a",2,2,5,"p",5,7,5,3,"e",6,"r",7,6,5,3,2,1,"s",9,9,9,6,"e",2,"v",5,"e",3,"r",2,"a",1,6,4,1,2,"n",2,"c",3,5,5,5
,7,"i",4,"a",5,2,1,3,"e",6,"s",7,"l",4,"a",3,"c",2,3,1,5,3,2,"l",3,"a",4,"v",5,"e",6]

function noNumerico(num) {
    return isNaN(num) == true;
}

function numerico(num) {
    return isNaN(num) == false;
}
function encontrarClave(array){
return array.filter(noNumerico);
}

function encontrarClaveNumerica(array){
    return array.filter(numerico);
    }

function visualiza(array) {
    return array.join(" - ");
}
var soloLetras = encontrarClave(misterio);
var soloNumeros = encontrarClaveNumerica(misterio);

document.write(visualiza(soloLetras));
document.write("</br>");
document.write(visualiza(soloNumeros));