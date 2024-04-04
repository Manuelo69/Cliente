addEventListener('load', cargar, false);
var arrayAlumnos = [];
var labelAlumnos;
function cargar() {
    labelAlumnos = document.querySelector("label");
    boton1.addEventListener("click", guardarAlumno, false)
}

function guardarAlumno() {
    var alumno1 = new Alumno(nombre.value, curso.value, nota.value);
    alert(`El alumno ${alumno1.nombre} del curso ${alumno1.curso} con nota ${alumno1.nota} que paga ${alumno1.precio()} con beca de ${alumno1.descuento(descuento.value)} del curso ${alumno1.grupoAlumno.prototype.a}se ha guardado`)
    arrayAlumnos.push(alumno1);
    labelAlumnos.innerHTML = visualizarAlumnos();
}

function visualizarAlumnos() {
    var cadena = "";
    for (let i = 0; i < arrayAlumnos.length; i++) {
        cadena += arrayAlumnos[i].nombre+" "+arrayAlumnos[i].curso+" "+arrayAlumnos[i].nota+" "+arrayAlumnos[i].precio()+" "+arrayAlumnos[i].beca()+"\n";
    }
    return cadena
}



