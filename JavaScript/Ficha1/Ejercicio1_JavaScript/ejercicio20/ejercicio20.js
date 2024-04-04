var bucle = false ;
var fact = 1;
while (!bucle) {
    var num = parseInt(prompt(`Introduce un numero entero`));
    if (isNaN(num)) {
        alert(`Numero introducido no valido`);
    } else {
        bucle = true;
        fact = num;
        for (a = 1; a < num; a++) {
            fact = fact * a;
        }
    }
}
alert(`El factorial del numero ${num} es ${fact}`);
