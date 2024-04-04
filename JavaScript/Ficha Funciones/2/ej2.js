alert(`hola`);
var a = 0;
var b = 0;
function permuta() {
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
    [a, b] = [b, a];
    console.log(a);
    console.log(b);
    return `El primer número es ${a} y el segundo número es ${b}`;
}

permuta();
