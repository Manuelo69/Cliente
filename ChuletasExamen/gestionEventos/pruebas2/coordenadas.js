addEventListener('load', cargar, false);

function cargar() {
    //document.addEventListener("mousemove",muestraInformacion,false);
    document.addEventListener("click", moverBoton, true);
    document.addEventListener("mouseup", moverBoton, false);

}

function moverBoton(e) {
    var label = document.querySelector("label");
    var coordenadaX = e.clientX;
    var coordenadaY = e.clientY;
    var hecho = false;
   /* switch (e.type) {
        case "click":
            label.style.fontSize = "24px";
            label.innerHTML = `Has pulsado el ratos en la posicion ${coordenadaX},${coordenadaY}`;
            
            break;
        case "mouseup":
            label.style.fontSize = "13px";
            label.innerHTML = `Has pulsado el ratos en la posicion ${coordenadaX},${coordenadaY}`;
            e.stopPropagation();
            break;
        /*case "mousemove":
            label.style.fontSize = "13px";
            label.innerHTML = `Has pulsado el ratos en la posicion ${coordenadaX},${coordenadaY}`;
            break;
        default:
            break;
    }*/
    if (e.type == "click") {
        label.style.fontSize = "24px";
        label.innerHTML = `Has pulsado el ratos en la posicion ${coordenadaX},${coordenadaY}`;
        hecho = true;
    } else if (e.type == "mouseup") {
        label.style.fontSize = "13px";
        label.innerHTML = `Has pulsado el ratos en la posicion ${coordenadaX},${coordenadaY}`;
        hecho = false;
    } else {
        label.innerHTML = `Has pulsado el ratos en la posicion ${coordenadaX},${coordenadaY}`;
    }

}

