addEventListener('load', cargar, false);

function cargar() {
    var botones = document.querySelectorAll(".botones");
    var pulsame = document.querySelector("span");
    var padre1 = document.querySelector('#padre1')
    var result = document.querySelector('#resultado');
    for (let i = 0; i < botones.length; i++) {
        botones[i].addEventListener("click", visualizar, false);
        // botones[i].addEventListener("mouseover", verEvento, false)
        // botones[i].addEventListener("mouseout", verEvento, false)

    }
    pulsame.addEventListener('click', function (e) { e.target.innerHTML = 'Ha hecho clic en '; }, false);
    padre1.addEventListener('mouseover', function (e) {
        result.innerHTML = "El desencadenador del evento \ MouseOver \ tiene la id: " + e.target.id;
    }, false);
}

function verEvento(e) {
    alert(`Este evento es: ${e.type}`);
}

function visualizar(ev) {
    alert(`Este boton es ${ev.target.value}`);
}