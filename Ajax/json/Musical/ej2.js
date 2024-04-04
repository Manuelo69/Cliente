addEventListener('load', cargar, false);
var divInfo
var imagenCaratula;
var arrImagenes = new Array("imagen1.jpg", "imagen2.jpg", "imagen3.jpg", "imagen4.jpg", "imagen5.jpg", "imagen6.jpg", "imagen7.jpg", "imagen8.jpg",
    "imagen9.jpg", "imagen10.jpg", "imagen11.jpg", "imagen12.jpg", "imagen13.jpg", "imagen14.jpg", "imagen15.jpg", "imagen16.jpg", "imagen17.jpg", "imagen18.jpg",
    "imagen19.jpg", "imagen20.jpg", "imagen21.jpg", "imagen22.jpg", "imagen23.jpg", "imagen24.jpg", "imagen25.jpg", "imagen26.jpg");
var contador = 0;
function cargar() {
    imagenCaratula = document.querySelector("img");
    divInfo = document.querySelector("#info");
    boton1.addEventListener("click", envioform, false);
    boton2.addEventListener("click", siguienteInfo, false);
    boton3.addEventListener("click", anteriorInfo, false);
    boton4.addEventListener("click", siguienteInfoAutomatico, false);
    boton5.addEventListener("click", anteriorInfoAutomatico, false);



}

function anteriorInfo() {
    if (contador < 0) {
        contador = arrImagenes.lenght;
    } else {
        contador++;
        divInfo.innerHTML = "";
        envioform();
    }
}

function siguienteInfo() {
    if (contador > arrImagenes.lenght) {
        contador = 0;
    } else {
        contador--;
        divInfo.innerHTML = "";
        envioform();
    }
}

function anteriorInfoAutomatico() {
    if (contador < 0) {
        contador = arrImagenes.lenght;
    } else {
        contador++;
        divInfo.innerHTML = "";
        envioform();
    }
}

function siguienteInfoAutomatico() {
    if (contador > arrImagenes.lenght) {
        contador = 0;
    } else {
        contador--;
        divInfo.innerHTML = "";
        envioform();
    }
}
function envioform() {
    var xhr;
    if (window.XMLHttpRequest) {
        xhr = new XMLHttpRequest();
    } else if (window.ActiveXObject) {
        xhr = new ActiveXObject("Microsoft.XMLHTTP");
    }
    xhr.open('GET', "musical.json", true);
    xhr.send(null);
    xhr.onreadystatechange = muestracontenido;

    function muestracontenido() {

        if (xhr.readyState == 4) {
            if (xhr.status == 200) {
                datos = JSON.parse(xhr.responseText);
                imagenCaratula.src = arrImagenes[contador];
                let arrayDatos = datos.catalog.cd;

                cadena = `id: ${arrayDatos[contador]["id"]}
                    titulo: ${arrayDatos[contador]["title"]}
                    artista: ${arrayDatos[contador]["artist"]}
                    pais: ${arrayDatos[contador]["country"]}
                    compania: ${arrayDatos[contador]["company"]}
                    precio: ${arrayDatos[contador]["price"]}
                    ano: ${arrayDatos[contador]["year"]}`
                let datosDiv = document.createTextNode(cadena);
                divInfo.appendChild(datosDiv);

            }
            else {
                divInfo.innerHTML = "Codigo de error " + xhr.status;
            }
        }
    };
}