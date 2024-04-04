




addEventListener('load', cargar, false);
var arrEmpleados;
var arrAnalistas;
var arrProgramadores;
var arrProyectos;
var espacioRegistro;
var programador;
var lenguajesProg;

function cargar() {
    arrEmpleados = [];
    arrAnalistas = [];
    arrProgramadores = [];
    espacioRegistro = document.querySelector("#oficio")
    boton1.addEventListener("click", crearPersona, false);
    boton2.addEventListener("click", mostrarOficios, false);
    boton3.addEventListener("click", registrarOficios, false);
    boton4.addEventListener("click", visualizarTodos, false);
    boton5.addEventListener("click", visualizarPrincipiantes, false);
    boton6.addEventListener("click", subirSueldoSenior, false);
    boton7.addEventListener("click", verLineasPorMes, false);
    boton8.addEventListener("click", clasificacionLineasMes, false);
    boton9.addEventListener("click", verProyectosAnalista, false);
    boton10.addEventListener("click", generarNombresAnalista, false);
}

function crearPersona() {
    var persona1 = new Empleado(nom.value, ced.value, edad.value, positivo.checked, sal.value);
    arrEmpleados.push(persona1);
    nom.value = "";
    ced.value = "";
    edad.value = "";
    positivo.checked = false;
    sal.value = "";

}

function mostrarOficios() {
    vaciarDiv();
    selectNombres();
    if (analista.checked) {
        programador = false;
        opcionesAnalista();
        analista.checked = false;
    } else {
        programador = true;
        opcionesProgramador();
        progra.checked = false;
    }
}

function registrarOficios() {
    if (programador) {
        registrarProgramador()
    } else {
        registrarAnalista();
    }
}

function opcionesAnalista() {
    arrProyectos = new Array();
    var inp1 = document.createElement("input");
    inp1.type = "text";
    inp1.id = "descripciones";
    inp1.className = "borrar";
    var inp2 = document.createElement("input");
    inp2.type = "button";
    inp2.value = "Añadir descripcion de proyectos";
    inp2.className = "borrar";
    espacioRegistro.appendChild(inp1);
    espacioRegistro.appendChild(inp2);
    inp2.addEventListener("click", function () {
        arrProyectos.push(inp1.value);
        inp1.value = "";
    }, false);

}


function opcionesProgramador() {
    lenguajesProg = new Array("Java", "php", "javascript", "net", "android", "python");
    var inp1 = document.createElement("input");
    inp1.type = "number";
    inp1.id = "lineas";
    inp1.className = "borrar";
    inp1.placeholder = "Lineas de codigo por dia";
    var sel = document.createElement("select");
    espacioRegistro.appendChild(inp1);
    for (let i = 0; i < lenguajesProg.length; i++) {
        let opt = document.createElement("option");
        let texto = document.createTextNode(lenguajesProg[i]);
        opt.appendChild(texto);
        opt.value = lenguajesProg[i];
        sel.appendChild(opt);
    }
    sel.className = "borrar";
    sel.id = "lenguajes"
    espacioRegistro.appendChild(sel);
}

function selectNombres() {
    var sel = document.createElement("select");
    espacioRegistro.appendChild(sel);
    for (let i = 0; i < arrEmpleados.length; i++) {
        let opt = document.createElement("option");
        let texto = document.createTextNode(arrEmpleados[i].nombre);
        opt.appendChild(texto);
        opt.value = arrEmpleados[i].nombre;
        sel.appendChild(opt);
    }
    sel.id = "nombresEmpleados";
    sel.className = "borrar";
}

function vaciarDiv() {
    let hijosDiv = document.querySelectorAll(".borrar");
    for (let i = 0; i < hijosDiv.length; i++) {
        hijosDiv[i].remove();
    }
}

function registrarProgramador() {
    let indice = document.querySelector("lenguajes").selectedIndex;
    for (let i = 0; i < arrEmpleados.length; i++) {
        if (arrEmpleados[i].nombre == nombresEmpleados.value) {
            var programador1 = new Programador(arrEmpleados[i].nombre, arrEmpleados[i].cedula,
                arrEmpleados[i].edad, arrEmpleados[i].casado, arrEmpleados[i].salario, lineas.value, lenguajesProg[indice]);
            arrProgramadores.push(programador1);
            arrEmpleados.splice(i, 0);
        }

    }
}


function registrarAnalista() {
    for (let i = 0; i < arrEmpleados.length; i++) {
        if (arrEmpleados[i].nombre == nombresEmpleados.value) {
            var analista1 = new Analista(arrEmpleados[i].nombre, arrEmpleados[i].cedula,
                arrEmpleados[i].edad, arrEmpleados[i].casado, arrEmpleados[i].salario, arrProyectos);
            arrAnalistas.push(analista1);
            arrEmpleados.splice(i, 0);
        }
    }
}

function visualizarTodos() {
    let cadena = "";
    for (let k = 0; k < arrEmpleados.length; k++) {
        cadena += arrEmpleados[k].informacion() + "\n";
    }
    for (let i = 0; i < arrProgramadores.length; i++) {
        cadena += arrProgramadores[i].informacion() + "\n";
    }
    for (let j = 0; j < arrAnalistas.length; j++) {
        cadena += arrAnalistas[j].informacion() + "\n";
    }
    resultado.value = cadena;

}

function visualizarPrincipiantes() {
    let cadena = "";
    for (let k = 0; k < arrEmpleados.length; k++) {
        if (arrEmpleados[k].cedula == "Principiante" || arrEmpleados[k].cedula == "principiante") {
            cadena += arrEmpleados[k].informacion() + "\n";
        }
    }
    for (let i = 0; i < arrProgramadores.length; i++) {
        if (arrProgramadores[i].cedula == "Principiante" || arrProgramadores[i].cedula == "principiante") {
            cadena += arrProgramadores[innerWidth].informacion() + "\n";
        }
    }
    for (let j = 0; j < arrAnalistas.length; j++) {
        if (arrAnalistas[j].cedula == "Principiante" || arrAnalistas[j].cedula == "principiante") {
            cadena += arrAnalistas[j].informacion() + "\n";
        }
    }
    resultado.value = cadena;
}

function subirSueldoSenior() {
    let cadena = "";
    for (let k = 0; k < arrEmpleados.length; k++) {
        if (arrEmpleados[k].cedula == "Senior" || arrEmpleados[k].cedula == "senior") {
            arrEmpleados[k].salario *= 1.10;
            cadena += arrEmpleados[k].informacion() + "\n";
        }
    }
    for (let i = 0; i < arrProgramadores.length; i++) {
        if (arrProgramadores[i].cedula == "Senior" || arrProgramadores[i].cedula == "senior") {
            arrAnalistas[i].salario *= 1.10;
            cadena += arrProgramadores[i].informacion() + "\n";
        }
    }
    for (let j = 0; j < arrAnalistas.length; j++) {
        if (arrAnalistas[j].cedula == "Senior" || arrAnalistas[j].cedula == "senior") {
            arrAnalistas[j].salario *= 1.10;
            cadena += arrAnalistas[j].informacion() + "\n";
        }
    }
    resultado.value = cadena;
}

function verLineasPorMes() {
    arrMeses = new Array("enero", "febrero", "marzo", "abril", "mayo", "junio", "julio", "agosto", "septiembre", "octubre", "noviembre", "diciembre");
    let cadena = "";
    for (let i = 0; i < arrProgramadores.length; i++) {
        cadena += arrProgramadores.nombre + ":\n";
        for (let j = 0; j < arrMeses.length; j++) {
            cadena += `lineas en ${arrMeses[j]} son ${arrProgramadores[j].promedioMensual(arrMeses[j])} \n`
        }
    }
    resultado.value = cadena;
}

function clasificacionLineasMes() {
    arrLineasMes = new Array();
    let clasificacion = "";
    for (let i = 0; i < arrProgramadores.length; i++) {
        let cadena = "";
        cadena = arrProgramadores[i].nombre + ": " + arrProgramadores[i].promedioMensual("febrero");
        arrLineasMes.push(cadena);
    }
    arrLineasMes.sort(function (a, b) {
        return a - b;
    });
    for (let j = 0; j < arrLineasMes.length; j++) {
        clasificacion += arrLineasMes[j] + "\n";
    }
    resultado.value = clasificacion;
}

function generarNombresAnalista() {
    let divNombres = document.querySelector("#nombresAnalistas");
    let sel = document.createElement("select");
    sel.id = selectNom;
    for (let j = 0; j < arrAnalistas.length; j++) {
        let opt = document.createElement("option");
        let texto = document.createTextNode(arrAnalistas[i].nombre);
        opt.appendChild(texto);
        opt.value = arrAnalistas[i].nombre;
        opt.classList = "nombresAnalista";
        sel.appendChild(opt);
    }
    divNombres.appendChild(sel);
}

function verProyectosAnalista() {
    let selectNombres = document.querySelectorAll("#SelectNom");
    let opcionesNombres = document.querySelectorAll(".nombresAnalista")
    let nombre = opcionesNombres[selectNombres.selectedIndex];
    let cadena = "";
    for (let i = 0; i < arrAnalistas.length; i++) {
        if (nombre == arrAnalistas[i].nombre) {
            cadena = arrAnalistas[i].cadenaDescripciones + " " + arrAnalistas[i].numProyectos;
        }
    }
    resultado.value = cadena;
}

