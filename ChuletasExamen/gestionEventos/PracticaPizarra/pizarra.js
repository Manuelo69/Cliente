

addEventListener('load', inicio, false);
var div = document.querySelectorAll("div");
var label = document.querySelector("label");

function inicio() {
    var casillas = prompt(`Introduce cuantas casillas quieres`);
    var tamaño = prompt(`introduce el tamaño del tablero`);
    var divPrincipal = document.querySelector("#zonaDibujo");

    var arrayCasillas = new Array(parseInt(casillas));
    for (let i = 0; i < arrayCasillas.length; i++) {
        arrayCasillas[i] = new Array(parseInt(casillas));
    }
    divPrincipal.style.height = `${tamaño}px`;
    divPrincipal.style.width = `${tamaño}px`;
    tamaAncho = `${divPrincipal.clientHeight}` / casillas + "px";
    tamaAlto = `${divPrincipal.clientWidth}` / casillas + "px";
    for (let i = 0; i < arrayCasillas.length; i++) {
        for (let j = 0; j < arrayCasillas[i].length; j++) {
            var d = document.createElement("div");
            d.style.height = tamaAlto;
            d.style.width = tamaAncho;
            d.className = "bordesPeques";
            divPrincipal.appendChild(d);
            d.style.float = "left";
            d.addEventListener("click", pintar, false);
        }
    }
    boton1.addEventListener("click", borrar, false);
    boton2.addEventListener("click", borrarTodo, false);
    boton3.addEventListener("click", volverPintar, false);
}

function pintar() {
    var pintar = true;
    label.innerHTML = `Estado del pincel: PINCEL ACTIVADO`;
    var pintar = confirm(`Empezar a pintar?`);
    if (pintar) {
        for (let i = 0; i < div.length; i++) {
            div[i].addEventListener("mouseover", colorear, false);
        }
        label.innerHTML = `Estado del pincel: PINCEL ACTIVADO`;
    } else {
        for (let i = 0; i < div.length; i++) {
            div[i].removeEventListener("mouseover", colorear, false);
        }
        label.innerHTML = `Estado del pincel: PINCEL DESACTIVADO`;
    }
}

function colorear() {
    var div = document.querySelectorAll("div");
    var color = document.querySelector("#colores");
    for (let i = 0; i < div.length; i++) {
        div[i].addEventListener("mouseover", function () {
            div[i].style.backgroundColor = `${color.value}`;
        }, false)
    }
}

function volverPintar() {
    for (let i = 0; i < div.length; i++) {
        div[i].addEventListener("click", function () {
            var color = document.querySelector("#colores");
            div[i].style.backgroundColor = `${color.value}`;
        }, false);
    }
    var label = document.querySelector("label");
    label.innerHTML = `Estado del pincel: PINCEL ACTIVADO`
}

function borrar() {
    for (let i = 0; i < div.length; i++) {
        div[i].addEventListener("click", function () {
            div[i].style.backgroundColor = 'white';
        })
    }
    label.innerHTML = `Estado del pincel: PINCEL ACTIVADO`;
}

function borrarTodo() {
    for (let i = 0; i < div.length; i++) {
        div[i].style.backgroundColor = 'white';
    }
}



