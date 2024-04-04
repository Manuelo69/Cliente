var bucle = false;
cadena = 0;
while (bucle == false) {
    var num = (prompt(`Introduce un numero`));
    if (num == null || num == "") {
        alert(`Saliendo`);
        bucle = true;
    } else if (isNaN(num)) {
        alert(`El dato introducido no es valido`);
    } else {
        cadena++;
    }
}
alert(`Has introducido ${cadena} numeros`);