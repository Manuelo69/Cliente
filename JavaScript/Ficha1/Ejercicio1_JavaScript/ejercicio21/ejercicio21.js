var suma = 0;
do {
    var num = parseInt(prompt(`Introduce un numero entero,introduzca 9999 para salir`));
    if (isNaN(num)) {
        alert(`Numero introducido no valido`);
    } else if (num != 9999) {
        suma += num;
    }
} while (num != 9999);


if (suma <= 1) {
    alert(`La suma es ${suma} y es un valor menor que cero`);
}
else if (suma >= -1) {
    alert(`La suma es ${suma} y es un valor mayor que cero`);
}
else {
    alert(`La suma es ${suma} y es cero`);
}





