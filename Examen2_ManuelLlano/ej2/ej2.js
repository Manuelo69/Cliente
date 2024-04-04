//Iniciamos los eventos
addEventListener('load', inicio, false);
var random;
var cont = 0;

//aquí añadiremos las diferentes funciones que queramos realizar
function inicio() {
    ran.addEventListener("click", aleatorio, false);
    comprobar.addEventListener("click", comp, false);
};

function aleatorio() {
    //generamos el número random al dar al boton y enviamos el mensaje
    ramdon = Math.floor(Math.random * 100);
    alert(`Ya he pensado el número secreto`);
};

function comp() {
    do {
        /*hacemos un bucle para comprobar si el número es mayor o menor, 
        y acabará cuando se acierte, además de poner un contador de intentos*/
        if (isNaN(adi.value)) {
            mensajes.value = `El valor introducido no es valido`;
        }
        else if (adi.value < ramdon) {
            mensajes.value = `El número introducido es menor que el mio`;
        } else if (adi.value > random) {
            mensajes.value = `El número introducido es mayor que el mio`;
        }
    } while (adi.value != ramdon);
    //ponemos los mensajes que tiene que mostrar al acertar
    mensajes.value = `GENIAL!! HAS ACERTADO, MI NUMERO ERA ${ramdon}`;

}


