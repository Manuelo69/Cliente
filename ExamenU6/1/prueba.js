addEventListener("load", cargar, false)

function cargar() {
    boton.addEventListener("click", informacion, false);
}

function informacion() {
    var parrafos = document.querySelectorAll("p");
    document.write(`Hay un total de ${parrafos.length} parrafos`);
    if (parrafos.length == 0) {
        document.write(`<br>no hay parrafos`)
    } else {
        for (let i = 0; i < parrafos.length; i++) {
            var enlaces = parrafos[i].querySelectorAll("a");
            if (enlaces.length != 0) {
                document.write(`<br>Parrafo ${i + 1}: ${enlaces.length} enlaces`);
                for (let i = 0; i < enlaces.length; i++) {
                    document.write(`<br>Enlace ${i+1} ${enlaces[i].text}`);
                }
            } else {
                document.write(`<br>Parrafo ${i + 1} sin enlaces`)
            }
        }
    }


}

