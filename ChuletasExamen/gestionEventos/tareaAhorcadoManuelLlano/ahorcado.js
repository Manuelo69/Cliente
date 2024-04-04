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
var arraydiv;
var cadena = "Letras utilizadas ";
var oportunidades;
var textoOportunidades;
var letrasAcertadas;
var textoLetrasUsadas;
var palabraAhorcado;

function cargar() {

    let sel = document.createElement("select");
    let seleccion = document.querySelector("#seleccion");
    textoOportunidades = document.querySelector("strong");
    textoLetrasUsadas = document.querySelector("#repetidas");
    let clicks = 0;
    oportunidades = 0;
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
            palabraAhorcado = arrayPalabras[indiceSeleccionado][numeroAleatorio];
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
        letrasAcertadas = letrasPalabraSeleccionada.length;
        arraydiv = document.querySelectorAll(".bordes")
    }, false);
    document.addEventListener("keyup", ponerLetras, false);
}

function ponerLetras(e) {
    var acierto = false;
    ;
    if (!letrasRepetidas(e, letrasUsadas)) {
        alert(`el caracter ${String.fromCharCode(e.keyCode)} no es valido, se encuentra repetido`);
    } else if (palabrasLetras(e)) {
        for (let i = 0; i < letrasPalabraSeleccionada.length; i++) {
            if (String.fromCharCode(e.keyCode) == letrasPalabraSeleccionada[i]) {
                let texto = document.createTextNode(String.fromCharCode(e.keyCode));
                arraydiv[i].appendChild(texto);
                acierto = true;
                letrasAcertadas--;
            }
        }
        palabrasUtilizadas(e);
    } else {
        alert(`el caracter ${String.fromCharCode(e.keyCode)} no es valido, solo valen letras mayusculas`);
    }
    oportunidad();
   
    if (letrasAcertadas == 0) {
        alert(`la palabra ${palabraAhorcado} ha sido acertada con un total de ${oportunidades} oportunidades`);
    }
}

function palabrasLetras(e) {
    var valido = true;
    if (e.keyCode < 65 || e.keyCode > 90) {
        valido = false;
    }
    return valido;
}

function letrasRepetidas(e, array) {
    var valido = true;
    if (array.indexOf(String.fromCharCode(e.keyCode)) != -1) {
        valido = false;
    }
    return valido;
}

function palabrasUtilizadas(e) {
    cadena += String.fromCharCode(e.keyCode) + " ";
    letrasUsadas.push(String.fromCharCode(e.keyCode));
    textoLetrasUsadas.innerHTML = cadena;
}

function oportunidad() {
    oportunidades++;
    textoOportunidades.innerHTML = `oportunidades: ${oportunidades}`;
}