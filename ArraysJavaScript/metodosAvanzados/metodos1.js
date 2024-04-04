var array = [];
function crearArray() {   
    for (let i = 0; i < 100; i++) {
        var aleatorio = Math.round(Math.random()*100+1);
        array[i] = aleatorio;
        document.write(array[i]+", ");
    }
    return array;
}

function menosDe50(num){
return num < 50;
}

var array = crearArray();
/*Funcion filter para filtrar en base a un criterio */
function ver(array){
    document.write("</br>");
    return array.filter(menosDe50)+", ";
}
/*Funcion map para aplicar en cada elemento una operación */
function cuadrado(arr){
    return array.map(Math.sqrt);
}
/*función reduce que devuelve un unico valor*/
function sumaTotal(total, num) {
    return total+num;
}
var sumatotal = sumaTotal(7,45);
document.write(ver(array));
document.write(cuadrado(array));
document.write("</br>");
document.write(array.reduce(sumaTotal));