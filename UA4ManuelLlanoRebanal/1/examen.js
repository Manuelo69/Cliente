addEventListener('load', inicio, false);

function inicio() {
    //hago un array con todas las imagenes
    var posicion = 0;
    var imagenes = new Array("1.jpg", "2.jpg", "3.jpg", "4.jpg", "5.jpg", "6.jpg", "7.jpg", "8.jpg");
    imagen.src = imagenes[0];
    //utilizando el id de la imagen y la instrucción src cambio la imagen a la primera
    inicial.addEventListener("click", function () {
        imagen.src = imagenes[0];
        posicion = 0;
    }, false);
    //utilizando el id de la imagen y la instrucción src cambio la imagen a la última
    final.addEventListener("click", function () {
        imagen.src = imagenes[imagenes.length - 1];
        posicion = imagenes.length - 1;
    }, false);
    /* Como el método indexOf no funciona en un array de imágenes, declaro una variable llamada posición
    para controlar el avance o el retraso de las imágenes, y en caso de que no haya más envio mensaje*/
    siguiente.addEventListener("click", function () {
        if (posicion < imagenes.length-1) {
            posicion++;
            imagen.src = imagenes[posicion];
        } else {
            alert(`No se puede avanzar, no hay mas imágenes`);
        }
    }, false);
    anterior.addEventListener("click", function () {
        if (posicion > 0) {
            posicion--;
            imagen.src = imagenes[posicion];
        } else {
            alert(`No se puede retroceder, no hay mas imágenes`);
        }
    }, false);
}
