


function confirmar() {
    var confirmacion = confirm(`Quieres entrar en la página?`);
    if (boolean == true) {
        confirmacion = true;
    } else {
        confirmacion = false;
    }
    return confirmacion;
}

function validar(boolean) {
    if (boolean == true) {
        contraseña;
    } else {
        alert(`Saliendo del sistema`);
    }
}

function contraseña() {
    var bucle = true;
    while (!bucle) {
        var cont = prompt(`Introduce la contraseña
    pista: comida que se come en el cine`);
        if (cont == "Palomitas") {
            alert(`entrando al sistema`);
            bucle = false;
        } else {
            alert(`contraseña incorrecta, intentalo de nuevo`);
        }
    }
}

 var entrar = confirmar;
 