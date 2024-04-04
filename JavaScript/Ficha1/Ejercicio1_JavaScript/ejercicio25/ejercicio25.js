do {
    var num1 = parseInt(prompt(`Introduce un numero`));
    var num2 = parseInt(prompt(`Introduce otro numero`));
    var num3 = parseInt(prompt(`Introduce otro numero más`));
    if (isNaN(num1) || isNaN(num2) || isNaN(num3)) {
        alert(`Uno de los datos introducidos no es válido, por favor, vuelve a intentarlo`);
    } else {
        cont++;
    }
} while (cont < 1);

if (num1 > num2 && num1 > num3) {
    alert(`${num1} es el numero mas grande`);
} else if (num2 > num3) {
    alert(`${num2} es el numero mas grande`);
} else {
    alert(`${num3} es el numero mas grande`);
}