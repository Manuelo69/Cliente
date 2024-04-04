let identificadorTiempoDeEspera;
//solo una vez
function temporizadorDeRetraso() {
    identificadorTiempoDeEspera = setTimeout(funcionConRetraso,3000);
}

function funcionConRetraso() {
    alert("han pasado 3 segundos ");
}

temporizadorDeRetraso();