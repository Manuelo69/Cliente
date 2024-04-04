addEventListener('load', cargar, false);
var arrayMusica = [];
var labelMusica;
function cargar() {
    labelMusica = document.querySelector("label");
    boton1.addEventListener("click", guardarDisco, false);
    boton2.addEventListener("click", precioTotal, false);
    boton3.addEventListener("click", calcularPrecio, false);
}

function guardarDisco(e) {
    if (tit.value != "" || gru.value != "" || fec.value != null) {
        var cd1 = new cd_musica(tit.value, gru.value, fec.value);
        alert(`El cd ${cd1.titulo} del grupo ${cd1.grupo} con fecha ${cd1.fecha} y precio ${cd1.precio}`)
        arrayMusica.push(cd1);
        labelMusica.innerHTML = visualizarDiscos();
    } else {
        alert(`Faltan datos por rellenar`);
    }
}

function calcularPrecio() {
    var ramdon = Math.floor(Math.random() * 100 + 1);
    for (let i = 0; i < arrayMusica.length; i++) {
        arrayMusica[i].precio.prototype;
    }
}

function precioTotal() {
    let precioTotal = 0;
    for (let i = 0; i < arrayMusica.length; i++) {
        precioTotal += parseInt(arrayMusica[i].precio);
    }
    area.value = `El precio es ${precioTotal}`;
}

function visualizarDiscos() {
    let cadena = "";
    for (let i = 0; i < arrayMusica.length; i++) {
        cadena += "Titulo " + arrayMusica[i].titulo + ",grupo " + arrayMusica[i].grupo + ",fecha " + arrayMusica[i].fecha + "\n";
    }
    return cadena
}





