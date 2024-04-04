

var cont = 0;
//definimos la nota final
do {
    //pedimos el número por teclado
    var num1 = parseInt(prompt(`Introduce un número entre 1 y 5`));
    /*Comprobamos que sea un número entre 1 y 5 y después si es correcto, nos
     suma el contador para salir del bucle, en caso contrario suma aviso */
    if (num1 >= 1 && num1 <= 5) {
        cont++;
    } else {
        alert(`Valor introducido no válido`);
    }
} while (cont < 1);
// hará el bucle mientras contador sea menor de 1
alert(`El numero introducido es ${num1}
    Está comprendido en nuestro rango
    (1-5)`);
    //sacamos el mensaje del bucle y nos lo dará en el formato pedido