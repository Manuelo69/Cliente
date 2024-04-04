var cont = 0;
var suma = 0;
do {
    var num = parseInt(prompt(`Introduce un numero`));
    if (isNaN(num)) {
        alert(`Numero introducido no válido`);
    } else {
        cont++;
        if (cont > 5) {
            suma += num;
        }
    }

} while (cont < 10);
alert(`La suma es ${suma}`);
