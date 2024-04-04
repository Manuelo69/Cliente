function permuta_valores(numero1, numero2) {
    let [a, b] = [numero2, numero1];

    return [a, b];
}

function valida() {
    var cont = 0;
    while (cont <= 0) {
        a = parseFloat(prompt(`Introduce un número`));
        b = parseFloat(prompt(`Introduce otro número`));
        if (isNaN(a) || isNaN(b)) {
            alert(`Uno de los datos introducidos es incorrecto`);
        } else {
            cont++;
        }
    }
}