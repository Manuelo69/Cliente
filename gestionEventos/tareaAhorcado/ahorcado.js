addEventListener('load', cargar, false);
var arrayPalabras = new Array(5);
arrayPalabras[0] = new Array("Animales", "GATO", "RATON", "POLLO", "GALLO", "VACA", "ASNO");
arrayPalabras[1] = new Array("Comidas", "PIZZA", "ARROZ", "TOMATE", "MACARRONES", "LECHUGA", "PIMIENTO");
arrayPalabras[2] = new Array("Ciudades", "MADRID", "BRUSELAS", "PARIS", "LONDRES", "BOGOTÁ", "MALTA");
arrayPalabras[3] = new Array("Objetos", "HORNO", "MARTILLO", "DESTORNILLADOR", "PETO", "CUCHILLO", "ORDENADOR");
arrayPalabras[4] = new Array("Futbolistas", "MESSI", "VALVERDE", "MODRIC", "ZIDANE", "KANTE", "POGBA");
var indiceSeleccionado;
var letrasUsadas = [];
var letrasPalabraSeleccionada;
var arraylabel;

function cargar() {

    let sel = document.createElement("select");
    let seleccion = document.querySelector("#seleccion");
    let clicks = 0;
    for (let i = 0; i < arrayPalabras.length; i++) {
        let opt = document.createElement("option");
        let texto = document.createTextNode(`${arrayPalabras[i][0]}`);
        opt.appendChild(texto);
        opt.value = `opcion ${i + 1}`;
        sel.appendChild(opt);
    }
    seleccion.appendChild(sel);

    boton1.addEventListener("click", function () {
        if (clicks == 0) {
            clicks++
            indiceSeleccionado = document.querySelector("select").selectedIndex;
            let numeroAleatorio = Math.floor(Math.random() * 6 + 1);
            let palabraAhorcado = arrayPalabras[indiceSeleccionado][numeroAleatorio];
            let divAhorcado = document.querySelector("#letrasPalabra");
            letrasPalabraSeleccionada = palabraAhorcado.split("");
            for (let i = 0; i < palabraAhorcado.length; i++) {
                let divCreado = document.createElement("div");
                divCreado.className = "bordes";
                divAhorcado.appendChild(divCreado);
            }
        } else {
            alert("No se puede añadir mas de una palabra");
        }
        arraylabel = document.querySelectorAll(".bordes")
    }, false);
    document.addEventListener("keyup", ponerPalabras, false);
}

function ponerPalabras(e) {
    if (palabrasValidas(e)) {
        for (let i = 0; i < letrasPalabraSeleccionada.length; i++) {
            if (String.fromCharCode(e.keyCode) == letrasPalabraSeleccionada[i]) {
                arraylabel[i].innerHTLM = letrasPalabraSeleccionada[i];
            }
        }
    } else {
        alert(`el caracter ${String.fromCharCode(e.keyCode)} no es valido, solo valen letras mayusculas`);
    }
}

function palabrasValidas(e) {
    var valido = true;
    if (e.charCode < 65 && e.charCode > 90) {
        valido = false;
    }
    return valido;
}

function palabrasUtilizadas() {

}