addEventListener('load', inicio, false);
var alumnos = new Array("Juan López", "Luis Guerra", "Maria de la Hoz", "Elena Gómez", "Julia Caba");
var erasmus = new Array("Jonh Smith", "Lia Warner", "Oscar Klein", "Ednard Crow");
var claseA = new Array("Juan López", "Luis Guerra", "Maria de la Hoz", "Jonh Smith", "Lia Warner");
var claseB = new Array("Elena Gómez", "Julia Caba", "Oscar Klein", "Ednard Crow");
var todosAlumnos = alumnos.concat(erasmus);

function inicio() {
    VerTodosAlumnos.addEventListener('click', visualizar, false);
    VerAlumnos.addEventListener('click', visualizarAlumnos, false);
    VerErasmus.addEventListener('click', visualizarErasmus, false);
    alumnosInversa.addEventListener('click', visualizar2, false);
    Verinsercion.addEventListener('click', visualizar3, false);
    DarBaja.addEventListener('click', visualizar4, false);
    BajaUltimo.addEventListener('click', visualizar5, false);
    ordenar.addEventListener('click', visualizar6, false);
    borrarTercero.addEventListener('click', visualizar7, false);
    tercero.addEventListener('click', visualizar8, false);
    desaparecidos.addEventListener('click', visualizar9, false);
    alerta.addEventListener('click', visualizar10, false);
}

function visualizar() {

    var longitud = todosAlumnos.length;
    area.value = todosAlumnos.join(" / ") +
        " dimension: " + longitud;
}

function visualizarAlumnos() {

    var longitud = alumnos.length;
    area.value = alumnos.join(" / ") +
        " dimension: " + longitud;
}

function visualizarErasmus() {

    var longitud = erasmus.length;
    area.value = erasmus.join(" / ") +
        " dimension: " + longitud;
}

function visualizar2() {
    var inversa = todosAlumnos.reverse();
    var longitud = todosAlumnos.length;
    area.value = inversa.join(" / ") +
        " dimension: " + longitud;
}

function visualizar3() {
    todosAlumnos.unshift(nuevo.value);
}

function visualizar4() {
    var eliminado = todosAlumnos.shift();
    area.value = "alumno eliminado : " + eliminado;
}

function visualizar5() {
    var eliminado = todosAlumnos.pop();
    area.value = "alumno eliminado : " + eliminado;
}

function visualizar6() {
    var ordenadoA = claseA.sort();
    var ordenadoB = claseB.sort();
    area.value = `Clase A: ${ordenadoA.join(" / ")} dimesion: ${claseA.length}
    Clase B: ${ordenadoB.join(" / ")} dimension: ${claseB.length}`;
}

function visualizar7() {
    var borradoTercero = claseA.splice(2, 1);

    area.value = `Clase A: ${claseA.join(" / ")} dimesion: ${claseA.length}
    Clase B: ${claseB.join(" / ")} dimension: ${claseB.length} el borrado es
    ${borradoTercero}`;
}

function visualizar8() {

    var borrarInsertar = claseB.splice(2, 1, "Luis Alberto Peres", "Diana Pierce");
    area.value = `Clase A: ${claseA.join(" / ")} dimesion: ${claseA.length}
    Clase B: ${claseB.join(" / ")} dimension: ${claseB.length} el borrado es
    ${borrarInsertar}`;
}

function visualizar9() {
    var desaparecidos = cargarDesaparecidos();
    area.value = `Alumnos desaparecidos ${desaparecidos.join(" / ")}
    dimension ${desaparecidos.length}`;

}

function visualizar10() {
    var desaparecidos = cargarDesaparecidos();
    for (const valor of desaparecidos) {
        alert(valor);
    }

}

function cargarDesaparecidos() {
    var igualdad = false;
    var desaparecidos = [];
    for (const valor of todosAlumnos) {
        for (const valor2 of claseA) {
            if (valor == valor2) {
                igualdad = true;
            }
        }
        for (const valor2 of claseB) {
            if (valor == valor2) {
                igualdad = true;
            }
        }
        if (igualdad == true) {
            desaparecidos.unshift(valor);
        }
    }
    return desaparecidos;
}