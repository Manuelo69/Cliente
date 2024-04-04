addEventListener('load', cargar, false);

function cargar() {
    var botones = document.querySelectorAll(".botones");
    var pulsame = document.querySelector("span");
    for (let i = 0; i < botones.length; i++) {
        botones[i].addEventListener("click", function () {
            alert(`Este boton tiene el valor: ${this.value}`);
            /*botones[i].removeEventListener("click",function(){
                alert(`Este boton tiene el valor: ${this.value}`);
            },false);*/
        }, false);
        botones[i].addEventListener("mouseover", verEvento, false)
        botones[i].addEventListener("mouseout", verEvento, false)

    }
    pulsame.addEventListener('click', function (e) { e.target.innerHTML = 'Ha hecho clic en '; }, false);
}

function verEvento(e) {
    alert(`Este evento es: ${e.type}`);
}

