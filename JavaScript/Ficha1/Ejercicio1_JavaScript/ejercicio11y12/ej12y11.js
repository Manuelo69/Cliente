var confirmar = true;
 

do {
    suma = parseInt(prompt(`Cuanto es 15+15?`));
    respuesta = (suma == 30) ? alert(`La suma es correcta`) : alert(`La suma es incorrecta`);
    confirmar = confirm(`¿Quieres volver a intentarlo?`);
} while(confirmar)

alert(`Saliendo del programa`);