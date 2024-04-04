var variable1 = 6;
var cont = 0;
function pedirNumero() {
    while (cont < 1) {
        var num = parseFloat(prompt(`Introduce un número`));
        if (isNaN(num)) {
            alert(`Número introducido no válido`);
        } else {
            cont++;
        }
    }
}

function Signo() {
    pedirNumero;
    var signo;
    if (num < 0) {
        signo = negativo;
    } else if (num > 0) {
        signo = positivo;
    } else {
        signo = nulo;
    }
    alert(`el número ${num} es ${signo}`);
}

