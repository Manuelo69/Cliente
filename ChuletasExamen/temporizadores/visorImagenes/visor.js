addEventListener('load', inicio, false);

function inicio() {
    var posicion = 0;
    var imagenes = new Array("1.jpg", "2.jpg", "3.jpg", "4.jpg", "5.jpg", "6.jpg", "7.jpg", "8.jpg");
    imagen.src = imagenes[0];
    var id;
    on.addEventListener("click", function () {
         id = setInterval(function () {
            if (posicion < imagenes.length - 1) {
                posicion++;
                imagen.src = imagenes[posicion];
            } else {
                posicion = 0;
            }
        }, 1000)
    }, false);
    off.addEventListener("click", function () {
        clearInterval(id);
    }, false);
}
