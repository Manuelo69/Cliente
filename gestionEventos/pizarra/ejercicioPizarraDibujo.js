
addEventListener('load', function () {
    let gomaBorrar = false;
    let tablero = document.createElement('div');
    tablero.id = 'tablero';
    tablero.style.height = '700px';
    tablero.style.width = '700px';
    tablero.style.border = '2px solid black';
    tablero.style.position = 'absolute';
    tablero.style.top = '50%';
    tablero.style.left = '50%';
    tablero.style.display = 'flex';
    tablero.style.flexWrap = 'wrap';
    tablero.style.transform = 'translate(-50%, -50%)';
    document.querySelector("body").appendChild(tablero);

    let mensaje = document.createElement("p");
    mensaje.id = 'pincelEstado';
    mensaje.innerText = `PINZEL DESACTIVADO`;
    document.querySelector("body").appendChild(mensaje);

    let mensaje2 = document.createElement("p");
    mensaje2.id = 'gomaEstado';
    mensaje2.innerText = `GOMA DESACTIVADO`;
    mensaje2.style.marginTop = '-5px';
    document.querySelector("body").appendChild(mensaje2);

    for (let y = 0; y < 50; y++) {
        for (let x = 0; x < 50; x++) {
            let cuadricula = document.createElement('span');
            cuadricula.style.height = `${12}px`;
            cuadricula.id = x;
            cuadricula.style.width = `${12}px`;
            cuadricula.style.position = 'relative';
            cuadricula.style.clear = 'both';
            cuadricula.style.border = '1px solid grey';
            cuadricula.style.margin = 'left';
            document.querySelector("div").appendChild(cuadricula);
        }
    }


    mostrarCuadriculas.addEventListener("change", function () {
        ocultarMostrarCuadriculas();
    })

    pintar();


    resetear.addEventListener("click", function () {
        borradoTotal();
    })

    goma.addEventListener("click", function () {
        gomaBorrar = !gomaBorrar;
        if (gomaBorrar) {
            borrado(gomaBorrar);
            gomaEstado.innerText = `GOMA ACTIVADO`;
        } else {
            tablero.removeEventListener("mousemove", colorear, false);
            gomaEstado.innerText = `GOMA DESACTIVADO`;
        }
    })


}, false);

function ocultarMostrarCuadriculas() {
    let cuadriculas = document.querySelectorAll("span");
    for (let index = 0; index < cuadriculas.length; index++) {
        if (mostrarCuadriculas.checked) {
            cuadriculas[index].style.border = '1px solid transparent';
        } else {
            cuadriculas[index].style.border = '1px solid grey';
        }
    }
}

function pintar() {
    let cuadriculas = document.querySelectorAll("span");
    for (let index = 0; index < cuadriculas.length; index++) {
        cuadriculas[index].addEventListener("click", function () {
            tablero.addEventListener("mousemove", colorear, false);
            pincelEstado.innerText = `PINZEL ACTIVADO`;
        })
        cuadriculas[index].addEventListener("dblclick", function () {
            tablero.removeEventListener("mousemove", colorear, false);
            pincelEstado.innerText = `PINZEL DESACTIVADO`;
        })

    }

}

function borrado(gomaBorrar) {
    let cuadriculas = document.querySelectorAll("span");
    if (gomaBorrar) {
        for (let index = 0; index < cuadriculas.length; index++) {
            cuadriculas[index].addEventListener("mousemove", function () {
                tablero.addEventListener("mousemove", borrar, false);
            })
        }
    } else {
        for (let index = 0; index < cuadriculas.length; index++) {
            cuadriculas[index].addEventListener("mousemove", function () {
                tablero.removeEventListener("mousemove", borrar, false);
            })
        }
    }
}


function borradoTotal() {
    if (confirm(`¿QUIERES BORRAR TODA LA PIZARRA? pulsa ACEPTAR para borrar.`)) {
        let cuadriculas = document.querySelectorAll("span");
        for (let index = 0; index < cuadriculas.length; index++) {
            cuadriculas[index].style.backgroundColor = 'transparent';
        }
    }
}

function colorear(e) {
    e.target.style.backgroundColor = `${color.value}`;
}
function borrar(e) {
    e.target.style.backgroundColor = `transparent`;
}


