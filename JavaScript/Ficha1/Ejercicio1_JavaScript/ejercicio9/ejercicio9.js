var num = parseInt(prompt(`Introduce un numero`));
if (!isNaN) {
    switch (num) {
        case num = 0:
            alert(`El numero es cero`);
            break;
        case num < 0:
            alert(`El numero es menor de cero, por lo que es negativo`);
        case num > 0:
            alert(`El numero es mayor de cero, por lo que es positivo`);
            break
    }
} else {
    alert(`El tipo de dato introducido no es correcto`);
}

