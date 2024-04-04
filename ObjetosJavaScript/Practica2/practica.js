var arrBanco = new Array();
var crear = false;
var persona1;
var cuenta1;
var arrBanco = [];


addEventListener('load', cargar, false);

function cargar() {
    boton1.addEventListener("click", crearPersona, false);
    boton2.addEventListener("click", crearCuenta, false);
    boton3.addEventListener("click", aumentarSaldo, false);
    boton4.addEventListener("click", retencionSaldo, false);
    boton5.addEventListener("click", visualizarTodo, false);
    boton6.addEventListener("click", aumentoEspecifico, false);
    boton7.addEventListener("click", retencionEspecifica, false);
}

function crearPersona() {
    persona1 = new DatosPersonales(nom.value, dni.value, dir.value, tel.value);
    crear = true;
    alert("Persona registrada, registra ahora la cuenta");
}
function crearCuenta() {
    if (crear) {
        cuenta1 = new Cuentacorriente(persona1, num.value, saldo.value);
        arrBanco.push(cuenta1);
        crear = false;
        alert(`Cuenta creada`);
    } else {
        alert("crea un usuario primero")
    }
}

function visualizarTodo() {
    var cadena = "";
    for (let i = 0; i < arrBanco.length; i++) {
        cadena += arrBanco[i].datosCuenta() + "\n";
    }
    resultado.value = cadena;
}

function aumentarSaldo() {
    for (let i = 0; i < arrBanco.length; i++) {
        arrBanco[i].saldo = arrBanco[i].aumento(1000);
    }
}

function retencionSaldo() {
    for (let i = 0; i < arrBanco.length; i++) {
        arrBanco[i].saldo = arrBanco[i].decremento(parseInt(arrBanco[i].saldo) * 0.10);
    }
}

function aumentoEspecifico() {
    var cambio = false;
    var nombre = "";
    for (let i = 0; i < arrBanco.length; i++) {
        if (arrBanco[i].verNombre() == nombreCambio.value) {
            nombre = arrBanco[i].verNombre();
            arrBanco[i].saldo = arrBanco[i].aumento(parseInt(dineroCambio.value));
            cambio = true
        }
    }
    if (cambio) {
        alert(`El saldo de ${nombre} ha sido aumentado en ${parseInt(dineroCambio.value)}`)
    } else {
        alert(`No se ha encontrado al cliente`);
    }
}

function retencionEspecifica() {
    var cambio = false;
    var nombre = "";
    for (let i = 0; i < arrBanco.length; i++) {
        if (arrBanco[i].verNombre() == nombreCambio.value) {
            nombre = arrBanco[i].verNombre();
            arrBanco[i].saldo = arrBanco[i].decremento(parseInt(dineroCambio.value));
            cambio = true
        }
    }
    if (cambio) {
        alert(`El saldo de ${nombre} ha sido disminuido en ${parseInt(dineroCambio.value)}`)
    } else {
        alert(`No se ha encontrado al cliente`);
    }
}