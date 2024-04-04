var arrVacas;
var arrTigres;




addEventListener('load', cargar, false);

function cargar() {
    arrVacas = [];
    arrTigres = [];
    boton1.addEventListener("click", crearVaca, false);
    boton2.addEventListener("click", crearTigre, false);
    boton3.addEventListener("click", visualizarVacas, false);

}

function crearVaca() {
    var vaca1 = new Vaca(nom.value, esp.value, patas.value, true, litros.value);
    arrVacas.push(vaca1);
}

function crearTigre() {

}

function visualizarVacas() {
    let divVacas = document.querySelector("#imagenesVacas");
    for (let i = 0; i < arrVacas.length; i++) {
        let lab = document.createElement("img");
        lab.src = "Vaca.png";
        lab.style.float = "left";
        lab.style.height = "200px";
        lab.style.width = "200px";
        lab.id = i;
        lab.addEventListener("mouseover", mostrarInfo, false);
        lab.addEventListener("click", ordeñarVaca, false);
        divVacas.appendChild(lab);
    }
}

function ordeñarVaca(e) {
    for (let i = 0; i < arrVacas.length; i++) {
       if (e.target.id == i) {
        alert(`${e.target.litrosleche}`)
       }
        
    }
}

function mostrarInfo(e) {
    for (let i = 0; i < arrVacas.length; i++) {
        if (e.target.id == i) {
            resultado.value = arrVacas[i].informacion() + " " + arrVacas[i].litrosleche;
        }

    }
}