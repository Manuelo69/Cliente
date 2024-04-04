addEventListener('load', cargar, false);
var posicionX;
var posicionY;
var bicho;

function cargar() {
    bicho = document.querySelector(".imagen");
    bicho.style.position = "absolute";
    posicionX = 0;
    posicionY = 0;
    document.addEventListener("keyup", guardarAlumno, false)
}

function guardarAlumno(e) {
    switch (e.which) {
        case 37:
            posicionX -= 50;
            bicho.style.left = `${posicionX}px`;
            bicho.src = "Cristiano3.png";
            break;
        case 40:
            posicionY += 50;
            bicho.style.top = `${posicionY}px`;
            bicho.src = "Cristiano4.png";
            break;
        case 39:
            posicionX += 50;
            bicho.style.left = `${posicionX}px`;
            bicho.src = "Cristiano.png";
            break;
        case 38:
            posicionY -= 50;
            bicho.style.top = `${posicionY}px`;
            bicho.src = "Cristiano2.jpg";
            break;
        default:
            break;
    }
}


