addEventListener("load", mueveReloj, false);

function mueveReloj() {
    let momentoActual = new Date()
    let hora = momentoActual.getHours()
    let minuto = momentoActual.getMinutes()
    let segundo = momentoActual.getSeconds()

    if (segundo.length == 1) {
        segundo = "0" + segundo;
    }

    if (minuto.length == 1) {
        minuto = "0" + minuto;
    }

    if (hora.length == 1) {
        hora = "0" + hora;
    }

    relojTexto.value = hora + " : " + minuto + " : " + segundo;

    setInterval("mueveReloj()", 1000)
}
js
