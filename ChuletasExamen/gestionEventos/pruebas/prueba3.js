addEventListener('load', cargar, false);

function cargar() {
    var di = document.querySelectorAll("div");
    var spa = document.querySelector("span");
    spa.addEventListener('click', verEvento, false);
    di.addEventListener('click',verEvento, false);
}

function verEvento(e) {
    alert(`Este evento es: ${e.type}`);
}

