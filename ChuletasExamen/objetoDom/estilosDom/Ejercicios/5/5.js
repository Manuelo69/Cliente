addEventListener('load', cargar, false);

function cargar() {
    var tamañoLetras = 20;
    var arraySection = document.querySelectorAll("section");
    aumento.addEventListener("click", function () {
        for (let i = 0; i < arraySection.length; i++) {
            arraySection[i].style.fontSize = `${tamañoLetras}px`;
        }
        tamañoLetras++;
    }, false);
    tamaño.addEventListener("click", function () {
        tamañoLetras = 16;
        for (let i = 0; i < arraySection.length; i++) {
            arraySection[i].style.fontSize = `${tamañoLetras}px`;
        }
    }, false);
    color.addEventListener("click", function () {
        for (let i = 0; i < arraySection.length; i++) {
            arraySection[i].style.backgroundColor = 'red'
        }
    }, false);
    original.addEventListener("click", function () {
        for (let i = 0; i < arraySection.length; i++) {
            arraySection[i].style.backgroundColor = 'white'
        }
    }, false)
    solo1.addEventListener("click", function () {
        var opcion = seccion.value;
        if (opcion == 0 || opcion == 1) {
            arraySection[opcion].style.cssText = "background-color: orange; font-size:20px"
        } else {
            alert(`Dato no valido`);
        }

    }, false)
    org.addEventListener("click", function () {
        var opcion = seccion.value;
        if (opcion == 0 || opcion == 1) {
            arraySection[opcion].style.cssText = "background-color: white; font-size:16px"
        } else {
            alert(`Dato no valido`);
        }
    }, false)
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
