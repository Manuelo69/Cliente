addEventListener("load", inicio, false);

function inicio() {
    boton.addEventListener("click", ver, false);
    boton2.addEventListener("click", ver2, false);
    boton3.addEventListener("click", ver3, false);
    boton4.addEventListener("click", ver4, false);
}

function ver() {
    var costeHotel = coste_hotel();
    res.value = `el coste final es de ${costeHotel}`;
}

function ver2() {
    var viaje = coste_avion();
    res2.value = `el coste del viaje es de ${viaje}`;
}

function ver3() {
    var alquiler = coste_alquiler_coche();
    res3.value = `El coste del alquiler es de ${alquiler}`;
}

function ver4() {
    var costeHotel = coste_hotel();
    var viaje = coste_avion();
    var alquiler = coste_alquiler_coche();
    var total = calcularTotal(costeHotel, viaje, alquiler);
    res4.value = `El coste final de todo es: ${total}`;
}

function coste_hotel() {
    var precio;
    switch (estrellas.value) {
        case estrellas.value = "1":
            precio = noches.value * 30 * 0.98;
            break;
        case estrellas.value = "2":
            precio = noches.value * 60 * 0.98;
            break;
        case estrellas.value = "3":
            precio = noches.value * 90 * 0.98;
            break;
        case estrellas.value = "4":
            precio = noches.value * 120 * 0.98;
            break;
        case estrellas.value = "5":
            precio = noches.value * 150 * 0.98;
            break;
        default:
            alert(`dato no valido`);
            break;
    }
    return precio.toFixed(2);
}

function coste_avion() {
    var coste;
    if (ida.value == "10") {
        switch (vuelos.value) {
            case estrellas.value = "6":
                coste = 200 * 0.9;
                break;
            case estrellas.value = "7":
                coste = 500 * 0.9;
                break;
            case estrellas.value = "8":
                coste = 70 * 0.9;
                break;
            case estrellas.value = "9":
                coste = 37 * 0.90;
                break;
            default:
                alert(`dato no valido`);
                break;
        }
    } else if (ida.value = "11") {
        switch (vuelos.value) {
            case estrellas.value = "6":
                coste = 200 * 0.9 * 2;
                break;
            case estrellas.value = "7":
                coste = 500 * 0.9 * 2;
                break;
            case estrellas.value = "8":
                coste = 70 * 0.9 * 2;
                break;
            case estrellas.value = "9":
                coste = 37 * 0.90 * 2;
                break;
            default:
                alert(`dato no valido`);
                break;
        }
    }
    return coste;
}

function coste_alquiler_coche(numCoches) {
    var costeCoches;
    if (dia.value > 3 || dia.value < 7) {
        costeCoches = dia.value * 40 - 20;
    } else if (dia.value > 7) {
        costeCoches = dia.value * 40 - 50;
    } else {
        costeCoches = dia.value * 40;
    }
    return costeCoches * numCoches;
}

function calcularTotal(num1, num2, num3) {
    return num1 + num2 + num3;
}

