

function Alumno(nombre,curso,nota) {
    this.nombre = nombre;
    this.curso = curso;
    this.nota = nota;
    this.precio = matricula;
    this.descuento = beca;
    this.grupoAlumno = grupo;
}

function matricula() {
    precio = 100*parseInt(this.nota);
    return precio;
}

function beca(num) {
    precio = 100*parseInt(this.nota);
    descuento = precio*parseInt(num)/100;
    precioFinal = precio - descuento;
    return precioFinal;
}

function grupo() {
    var a = "grupoA";
    var b = "grupoB";
    var c = "grupoC";
}
