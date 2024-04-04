
addEventListener("load", function () {
    var cont = 0;
    var suma = 0;
    var cadena = " ";
    boton.addEventListener("click", function () {
        if (!isNaN(num1.value)) {
            cont++;
            cadena += num1.value;
        } else {
            alert(`Este número no es valido`);
        }
        res.value = cadena;
        focus(num1);
    }, false);
    tot.addEventListener("click", function () {
        total.value = cont;
    }, false)
}, false)
