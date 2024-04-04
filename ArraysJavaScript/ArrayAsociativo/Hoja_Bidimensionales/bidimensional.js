addEventListener('load', inicio, false);

function inicio() {
    var salas = new Array(5);
    var imagenOcupado = "4961646.png";
    var imagenLibre = "Ordenador.png";
    for (let i = 0; i < salas.length; i++) {
        salas[i] = new Array(20);
        for (let j = 0; j < salas[i].length; j++) {
            salas[i][j] = 0;
        }
    }
    var arrayImagenes = document.querySelectorAll(".ord");
    /* Asignar o cancelar turno- se activararán dos select encadenadas en la primera saldrán las
salas y en la segunda los equipos de esa sala. */
    ver.addEventListener("click", function () {
        reservarPC(salas);
        grafico(salas, arrayImagenes,imagenOcupado,imagenLibre);
    }, false);
    /*Cancelar la reserva*/
    ver2.addEventListener("click", function () {
        cancelarReserva(salas);
        grafico(salas, arrayImagenes,imagenOcupado,imagenLibre);
    }, false);
    /* Cantidad de equipos disponibles por sala*/
    ver3.addEventListener("click", function () {
        verReservasSala(salas);
    }, false);
    /*cantidad de turnos asignados en toda la U*/
    ver4.addEventListener("click", function () {
        verReservados(salas);
    }, false);

}
function obtenerSeleccion(select) {
    return document.getElementById(select).selectedIndex;
}
function reservarPC(salas) {
    buscaSala = obtenerSeleccion("select1");
    buscaPC = obtenerSeleccion("select2");
    if (salas[buscaSala][buscaPC] == 0) {
        salas[buscaSala][buscaPC] = 1;
        area.value = `El ordenador ${buscaPC + 1} de la sala ${buscaSala + 1} se ha reservado`
    } else {
        area.value = `No se ha podido realizar la reserva porque ya está hecha la reserva`;
    }
}

function cancelarReserva(salas) {
    buscaSala = obtenerSeleccion("select1");
    buscaPC = obtenerSeleccion("select2");
    if (salas[buscaSala][buscaPC] == 1) {
        salas[buscaSala][buscaPC] = 0;
        area.value = `La reserva del ordenador ${buscaPC + 1} de la sala ${buscaSala + 1} se ha anulado`
    } else {
        area.value = `Este ordenador no está reservado`;
    }
}

function verReservasSala(salas) {
    var disponible = [];
    var cantidad = 0;
    var cadena = "";
    for (let i = 0; i < salas.length; i++) {
        cantidad = 0;
        for (let j = 0; j < salas[i].length; j++) {
            if (salas[i][j] == 0) {
                cantidad += 1;
            }
        }
        disponible.push(cantidad);
    }
    for (let i = 0; i < disponible.length; i++) {
        cadena += `ordenadores libres en la sala${i+1}: ${disponible[i]} \n`;
    }
    area.value = cadena;
}

function verReservados(salas) {
    var ocupado = [];
    var cantidad = 0;
    var cadena = "";
    var total = 0;
    for (let i = 0; i < salas.length; i++) {
        cantidad = 0;
        for (let j = 0; j < salas[i].length; j++) {
            if (salas[i][j] == 1) {
                cantidad += 1;
            }
        }
        ocupado.push(cantidad);
    }
    for (let i = 0; i < ocupado.length; i++) {
        cadena += `ordenadores libres en la sala${i+1}: ${ocupado[i]} \n`;
        total += ocupado[i];
    }
    area.value = cadena + `\nEn total hay ${total} ocupados`;
}

function grafico(salas, arrayImagenes,imagenOcupado,imagenLibre) {
    for (let i = 0; i < salas.length; i++) {
        for (let j = 0; j < salas[i].length; j++) {
            if (salas[i][j] == 1) {
                arrayImagenes[i*20+j].src = imagenOcupado;
            } else  {
                arrayImagenes[i*20+j].src = imagenLibre;
            }
        }
        
    }
}