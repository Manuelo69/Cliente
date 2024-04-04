addEventListener('load', cargar, false);

function cargar() {
    var arrayImagenes = document.querySelectorAll(".imagen");
    var contador = 0;
    var div = document.querySelector("div");
    var clicks = 0;
    lento.addEventListener("click", function () {
        div.removeChild(arrayImagenes[contador]);
        contador++;
        if (contador == 5) {
            mensaje();
        }
    }, false);
    total.addEventListener("click", function () {
        for (let i = 0; i < arrayImagenes.length; i++) {
            div.removeChild(arrayImagenes[i]);
        }
        mensaje();

    }, false);
    nomb.addEventListener("click", function () {
        for (let i = 0; i < div.childNodes.length; i++) {
            if (arrayImagenes[i].getAttribute("title") == nom.value) {
                div.removeChild(arrayImagenes[i]);
                contador++;
                if (contador == 5) {
                    mensaje();
                }
            }
        }
        mensaje();
    }, false);
    auto.addEventListener("click", function () {

        var identificador = setInterval(function () {
            if (contador == arrayImagenes.length-1) {
                mensaje();
                clearInterval(identificador);
            } else {
            div.removeChild(arrayImagenes[contador]);
            contador++;
            }
        }, 2000);
        if (clicks != 0) {
            clearInterval(identificador);
            clicks = 0;
        } else {
            clicks++;
        }
        //no lo para al volver a darle
    }, false)
}

function mensaje() {
    let sect = document.createElement("sect");
    let par = document.createElement("p");
    let texto = document.createTextNode(`ya están todas las imagenes borradas`);
    document.body.appendChild(sect);
    sect.appendChild(par);
    par.appendChild(texto);
}

/*
borradoAutomatico.addEventListener('click', function () {
        
        if (borradoAutomatico.value == "Borrado Automatico OFF") {
            borradoAutomatico.value = "Borrado Automatico ON";

            idInter = setInterval(moverImagen, 2000);
        }
        else {
            borradoAutomatico.value = "Borrado Automatico OFF";

            clearInterval(idInter);
        }
    }, false);

    function moverImagen() {
        //Avanzar una imagen
        if (posicion <= imagenes.length - 1) 
        {
            document.body.removeChild(imagenes[posicion]);
            posicion++;
        }
    }
var idInter = "";
    var posicion = 0;
*/

