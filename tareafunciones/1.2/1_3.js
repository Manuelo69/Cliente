addEventListener("load", inicio, false);
var dinero = 50;

function inicio() {
    boton.addEventListener("click", ver, false);
    boton2.addEventListener("click", ver2, false);
}

function estadistica(aleatorio) {
    numeros[aleatorio-1] += 1;
}

function ver2() {
    
}

function ver() {
    do {
        var aleatorio = numeroRamdon();
        var validacion = validar(parseInt(num.value), parseInt(din.value));
        if (validacion == true) {
            apuesta(aleatorio);
        } else {
            alert(`Apuesta no valida`);
        }
        var salir = confirm(`Quieres salir de esta partida
        introduciras la misma apuesta`);
        cant.value = `Dinero: ${dinero}`;
    } while (salir == true || din.value < 0);

}

function numeroRamdon() {
    var ramd = Math.floor(Math.random() * 6) + 1;
    return ramd;
}

function validar(num1, num2) {
    if (!isNaN(num1.value) || !isNaN(num2.value)) {
        return false;
    }
    return true;
}

function apuesta(ram) {  
    if (din.value < dinero) {
        if (ram == num.value) {
            dinero = dinero + parseInt(din.value);
            res.value = `Apuesta ganada, tu dinero es ${dinero}
    El numero aleatorio fue ${ram}`;
        } else {
            dinero = dinero - parseInt(din.value);
            res.value = `Apuesta perdida, tu dinero es ${dinero}
        El numero aleatorio fue ${ram}`;
        }
    } else {
        res.value = `Has apostado una cantidad que no es posible apostar`;
    }
}

