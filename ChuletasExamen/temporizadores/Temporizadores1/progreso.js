

function cargarPag() {
    var confirmación = confirm(`Quieres acceder a la página?`);
    var vueltas = 0;
    if (confirmación) {
        var identificador = setInterval(function () {
            if (vueltas == 100) {
                clearInterval(identificador);
                ventana = ventanaSecundaria("");
                alert(`página cargada`);
            } else {
                prog.value++;
                vueltas += 1;
            }
        }, 100);

    } else {
        alert(`No ha querido entrar en la página`);
    }
}

cargarPag();


ventanaSecundaria();
function ventanaSecundaria(URL) {
    var ancho = 300;
    var largo = 300;
    var letf = screen.width / 2 - (ancho / 2);
    var top = screen.height / 2 - largo / 2;
    let parametros = `width=${ancho}px, height=${largo}px,scrollbars=NO,left=${letf},top=${top}`;
    return window.open(URL, "ventana1", parametros);
}

function sumar() {
    prog.value++;
}

