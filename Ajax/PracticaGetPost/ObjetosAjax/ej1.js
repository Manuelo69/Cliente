addEventListener('load', cargar, false);
var ruta;
var nombre;
var dni;
var edad;
var sexo;
var peso;
var altura;
var persona1;
var arrPersonas = [];
var contadorPersonas = 0;
function cargar() {
    divInfo = document.querySelector("#info");
    boton1.addEventListener("click", envioform, false);
    boton2.addEventListener("click", verInfo, false);
    boton3.addEventListener("click", calculoIMC, false);
    boton4.addEventListener("click", mayoresEdad, false);
    boton5.addEventListener("click", cambioDni, false);
    boton6.addEventListener("click", crearPersona, false);

}

function envioform() {
    var xhr;
    if (window.XMLHttpRequest) {
        xhr = new XMLHttpRequest();
    } else if (window.ActiveXObject) {
        xhr = new ActiveXObject("Microsoft.XMLHTTP");
    }
    let url;
    let sel = document.querySelector("select");
    let opt = document.querySelectorAll("option");
    var datos = new FormData();
    nombre = nom.value;
    edad = eda.value;
    dni = dniPer.value;
    sexo = opt[sel.selectedIndex].value;
    peso = pes.value;
    altura = alt.value;
    datos.append('nombre', nombre);
    datos.append('edad', edad);
    datos.append('dni', dni);
    datos.append('sexo', sexo);
    datos.append('peso', peso);
    datos.append('altura', altura);
    url = "php1.php";
    xhr.open('POST', url, true);
    xhr.send(datos);
    xhr.onreadystatechange = muestracontenido;

    function muestracontenido() {

        if (xhr.readyState == 4) {
            if (xhr.status == 200) {
                alert("Persona añadidad a fichero");
            }
            else {
                alert("Codigo de error " + xhr.status);
            }
        }
    };
}

function verInfo() {

}

function calculoIMC() {

}

function mayoresEdad() {

}

function cambioDni() {

}

function crearPersona() {
    var xhr;
    if (window.XMLHttpRequest) {
        xhr = new XMLHttpRequest();
    } else if (window.ActiveXObject) {
        xhr = new ActiveXObject("Microsoft.XMLHTTP");
    }
    xhr.open('GET', "datos.txt", true);
    xhr.send(null);
    xhr.onreadystatechange = muestracontenido;

    function muestracontenido() {
        // hacer split por * y por comas
        if (xhr.readyState == 4) {
            if (xhr.status == 200) {
                datosPersona = xhr.responseText;
                let divisionPersonas = datosPersona.split("*");
                let divisionDatos = divisionPersonas[contadorPersonas].split(",");
                persona1 = new Persona(divisionDatos[0], divisionDatos[1], divisionDatos[2], divisionDatos[3], divisionDatos[4], divisionDatos[5]);
                arrPersonas.push(persona1);
                contadorPersonas++;
            }
            else {
                divInfo.innerHTML = "Codigo de error " + xhr.status;
            }
        }
    };
}