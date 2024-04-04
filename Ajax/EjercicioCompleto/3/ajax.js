addEventListener('load', cargar, false);
var div;
var contenido;
var arrGeneros = [];
var arrImagenes;
function cargar() {
    arrImagenes = new Array("1.jpg", "2.jpg", "3.jpg", "4.jpg", "5.jpg", "6.jpg");
    div = document.querySelector("#contenido")
    for (let i = 0; i < 6; i++) {
        var div1 = document.createElement("div");
        div1.className = "ponerTitulos";
        div.id = i;
        div.addEventListener("click", mostrarCaratula, false);
        div.appendChild(div1);
    }
    boton1.addEventListener("click", envioform, false)
}

function mostrarCaratula() {

}

function envioform() {
    var xhr;
    if (window.XMLHttpRequest) {
        xhr = new XMLHttpRequest();
    } else if (window.ActiveXObject) {
        xhr = new ActiveXObject("Microsoft.XMLHTTP");
    }

    xhr.open('GET', "videos.xml", true);
    xhr.send(null);
    xhr.onreadystatechange = muestracontenido;

    function muestracontenido(e) {
        if (xhr.readyState == 4) {
            if (xhr.status == 200) {
                datos = xhr.responseXML;
                let titulos = datos.querySelectorAll("Titulo");
                let duracion = datos.querySelectorAll("Duracion");
                let genero = datos.querySelectorAll("Genero");
                var divTitulos = document.querySelectorAll(".ponerTitulos");
                let divFoto = document.querySelector("#caratula");
                let selectGeneros = document.querySelector("#generos");

                for (let i = 0; i < titulos.length; i++) {
                    let texto = document.createTextNode(titulos[i].firstChild.nodeValue);
                    divTitulos[i].appendChild(texto);
                    divTitulos[i].addEventListener("click", function () {
                        divFoto.src = arrImagenes[i];
                        var div1 = document.createElement("div");
                        div1.className = "ponerTitulos";
                        div1.style.position = "absolute";
                        div1.style.left = `${e.clientX}px`;
                        div1.style.top = `${e.clientY}px`;
                        var textoDiV = document.createTextNode(`La pelicula ${titulos[i].firstChild.nodeValue} tiene una 
                        duracion de ${duracion[i].firstChild.nodeValue} y su genero es ${genero[i].firstChild.nodeValue}`);
                        div1.appendChild(textoDiV);
                        div.appendChild(div1);

                    }, false);

                    divTitulos[i].addEventListener("mouseover", function () {
                        divTitulos[i].style.fontSize = "24px";
                        divTitulos[i].style.backgroundColor = "red";
                    }, false);
                    divTitulos[i].addEventListener("mouseout", function () {
                        divTitulos[i].style.fontSize = "16px";
                        divTitulos[i].style.backgroundColor = "white";
                    })
                    if (arrGeneros.indexOf(genero[i].firstChild.nodeValue) == -1) {
                        let opt = document.createElement("option");
                        let texto2 = document.createTextNode(genero[i].firstChild.nodeValue);
                        opt.appendChild(texto2);
                        opt.value = genero[i].firstChild.nodeValue;
                        selectGeneros.appendChild(opt);
                    }
                    arrGeneros.push(genero[i].firstChild.nodeValue);

                }
            }
            else {
                div.innerHTML = "Codigo de error " + xhr.status;
            }
        }
    };
}