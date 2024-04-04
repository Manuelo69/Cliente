var num = parseInt(prompt(`Introduce un numero para comprobar si es par o impar`));
if (isNaN(num)) {
    alert(`no has introducido un dato válido`)
} else if (num % 2 == 0) {
    alert(`El numero es par`);
} else {
    alert(`El numero es impar`);
}