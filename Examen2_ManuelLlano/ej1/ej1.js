//Iniciamos los eventos
addEventListener('load', inicio, false);
var cadena = "";

//aquí añadiremos las diferentes funciones que queramos realizar
function inicio() {
    boton.addEventListener("click", validacion, false);
};

function validacion() {
    /*Hacemos que este if compruebe el valor, y al introducir un caracter de longitud uno nos muestra el valor
    dentro del bucle que parara cuando "*" sea pulsado*/
    do {
        //comprobamos que el valor sea string, haciendo parseInt, ya que al parsearse un caracter es Nan y de longitud 1 para la validacion
        if (!isNaN(parseInt(cajaentrada1.value)) || length(cajaentrada1.value) <= 1) {
            cadena += cajaentrada1.value;
            //acumula los distintos valores
            cajav1.value = cajaentrada1.value;
            //nos pone en la caja1 el valor introducido
        } else {
            alert(`El valor que has introducido no es válido`);
        }
    } while (cajaentrada1.value != "*");
    cajav2.value = cadena;
    var confirmación = confirm(`¿Quieres continuar?`);
    //preguntamos al usuario si quiere continuar, en caso afirmativo, ponemos el foco y reseteamos datos, en caso negativo, nos despedimos de el
    if(confirmación == true){
    focus(cajaentrada1);
    } else {
        alert(`¡Adios!`);
    }
    //Al final nos escribe toda la cadena en la caja 2F 
};
