var bucle = true;
var conf = confirm(`Quieres entrar en la página?`);
if (conf == true) {
    while (bucle) {
        var contra = prompt(`Introduce la contraseña
        Pista: comida para el cine en plural`);
        if (contra == `Palomitas` || contra == `palomitas`) {
            alert(`Contraseña correcta, entrando al sistema`);
            bucle = false;
        } else {
            alert(`La contraseña es incorrecta, quieres volver a intentarlo?`);
        }
    }
} else {
    alert(`Saliendo de la pagina`);
}
