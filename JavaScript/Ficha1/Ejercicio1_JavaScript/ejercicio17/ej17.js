
var cont = 0;
var suma = 0;
while(cont < 5){
    var num = parseInt(prompt(`Introduce un numero`));
    suma += !isNaN(num) ? num : 0;
    cont++;
}

alert(`La suma de todo es ${suma}`);

