addEventListener('load', cargar, false);
var sel;
var divInfo;
var datos;
var selPais;
function cargar() {
    sel = document.querySelector("#paises");
    divInfo = document.querySelector("#respuesta");
    boton1.addEventListener("click", envioform, false);
    sel.addEventListener("change", selectPaises, false);

}

function selectPaises() {
    var sel2 = document.createElement("select");
    sel2.id = "selectPaises";
    for (let i = 0; i < datos.listadoPaises.pais[sel.selectedIndex].ciudadImportante.length; i++) {
        var nombreCiudad = datos.listadoPaises.pais[sel.selectedIndex].ciudadImportante[i];
        let opt = document.createElement("option");
        let texto = document.createTextNode(nombreCiudad);
        opt.appendChild(texto);
        opt.value = nombreCiudad;
        opt.className = "pais";
        sel2.appendChild(opt);
    }
    divInfo.appendChild(sel2);
    selPais = document.querySelector("#selectPaises");
    opcionesPais = document.querySelectorAll(".pais");
    selPais.addEventListener("change", function () {
        let img = document.querySelector("img");
        var xhr;
        if (window.XMLHttpRequest) {
            xhr = new XMLHttpRequest();
        } else if (window.ActiveXObject) {
            xhr = new ActiveXObject("Microsoft.XMLHTTP");
        }
        xhr.open('GET', "ciudades.json", true);
        xhr.send(null);
        xhr.onreadystatechange = muestracontenido;

        function muestracontenido() {

            if (xhr.readyState == 4) {
                if (xhr.status == 200) {
                    let datosImagenes = JSON.parse(xhr.responseText);
                    var ciudadElegida = opcionesPais[selPais.selectedIndex].value;
                    img.src = datosImagenes.ciudades[ciudadElegida];
                }
                else {
                    divInfo.innerHTML = "Codigo de error " + xhr.status;
                }
            }
        };
    }, false)
}

function envioform() {
    var xhr;
    if (window.XMLHttpRequest) {
        xhr = new XMLHttpRequest();
    } else if (window.ActiveXObject) {
        xhr = new ActiveXObject("Microsoft.XMLHTTP");
    }
    xhr.open('GET', "paises.json", true);
    xhr.send(null);
    xhr.onreadystatechange = muestracontenido;

    function muestracontenido() {

        if (xhr.readyState == 4) {
            if (xhr.status == 200) {
                datos = JSON.parse(xhr.responseText);
                for (let i = 0; i < datos.listadoPaises.pais.length; i++) {
                    var nombrePais = datos.listadoPaises.pais[i].nombre;
                    let opt = document.createElement("option");
                    let texto = document.createTextNode(nombrePais);
                    opt.appendChild(texto);
                    opt.value = nombrePais;
                    opt.className = "recoger";
                    sel.appendChild(opt);
                }
            }
            else {
                divInfo.innerHTML = "Codigo de error " + xhr.status;
            }
        }
    };
}