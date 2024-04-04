var cont = 0;
do {
    var num1 = parseInt(prompt(`Introduce un numero`));
    var num2 = parseInt(prompt(`Introduce otro numero`));
    if (isNaN(num1) || isNaN(num2)) {
        alert(`Uno de los datos introducidos no es válido, por favor, vuelve a intentarlo`);
    } else {
        cont++;
    }
} while (cont < 1);
var salir = false;
while (!salir) {
    var ope = parseInt(prompt(`Introduce una de las siguientes opciones
    + Sumar los dos números
    - Restar los dos números
    * multiplicar ambos números
    / Dividir los dos números
    5 salir`));
    switch (ope) {
        case "+":
            alert(`La suma es ${num1 + num2}`);
            break;
        case "-":
            alert(`La resta es ${num1 - num2}`);
            break;
        case "*":
            alert(`La multiplicación es ${num1 * num2}`);
            break;
        case "/":
            alert(`La división es ${num1 / num2}`);
            break;
        case 5:
            alert(`saliendo`);
            salir = true;
            break;
        default:
            alert(`Dato introducido no válido`);
    }
}


