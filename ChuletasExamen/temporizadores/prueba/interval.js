let identificadorTiempoDeEspera;
//que se repita
function temporizadorDeRetraso() {
    identificadorTiempoDeEspera = setInterval(funcionConRetraso,3000);
}

function funcionConRetraso() {
    document.write("han pasado 3 segundos ");
}

temporizadorDeRetraso();