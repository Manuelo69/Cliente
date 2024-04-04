
var cont = 0; 
var pares = 0;
var impares = 0;
var invalidos = 0;
while(cont < 5){
var num = parseInt(prompt(`Introduce un numero para comprobar si es par o impar`));
if (isNaN(num)) {
    invalidos++;
} else if (num % 2 == 0) {
    pares++;
} else {
    impares++;
}
cont++;
}
alert(`Has introducido ${pares} numeros pares, ${impares} numeros impares y ${invalidos} valores que no son validos`);
