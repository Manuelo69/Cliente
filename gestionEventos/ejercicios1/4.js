

addEventListener('load', inicio, false);

function inicio() {
    cuadrado.addEventListener("click", agarrarCuadrado, false);
    cuadrado.addEventListener("dblclick",function(){
        document.removeEventListener("mousemove", moverCuadrado, false);
    },false)
}

function agarrarCuadrado() {
    document.addEventListener("mousemove", moverCuadrado, false);
}

function moverCuadrado(e) {
    var coordenadaX = e.clientX;
    var coordenadaY = e.clientY;
    cuadrado.style.position = "absolute";
    cuadrado.style.left = coordenadaX - 20 + "px";
    cuadrado.style.top = coordenadaY - 20 + "px";
}
