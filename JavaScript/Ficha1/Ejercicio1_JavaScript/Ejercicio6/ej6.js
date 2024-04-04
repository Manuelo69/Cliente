
var suma = 0;
var multiplicacion = 1;
var cont = 0;
while(cont<4){
    var num = parseInt(prompt(`Introduce un numero`));
    suma += isNaN(num) ? num : 0;
    multiplicacion *= isNaN(num) ? num : 1;
    cont++;
}

alert(`La suma de los numeros es: ${suma}`);
alert(`El producto de los numeros es: ${multiplicacion}`);
