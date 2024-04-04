addEventListener('load', cargar, false);

function cargar() {
    var arrDias = ['Domingo', 'Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes', 'Sabado'];
    var arrMeses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];
    botonCalcular.addEventListener("click", calcularEdad, false);
    botonDiferencia.addEventListener("click", calculoDiferencia, false);
    botonDiaSemana.addEventListener("click", function () {
        let cadenaFecha = fecha1.value;
        let f = new Date(Date.parse(cadenaFecha));
        resultado.value = `Fecha: ${arrDias[f.getDay()]} de ${arrMeses[f.getMonth()]} `;
    }, false);
    botonInicio.addEventListener("click", calcularInicio, false);
}


function calcularEdad() {
    let hoy = new Date();
    let cadenaFecha = fecha1.value;
    let fechaNac = new Date(Date.parse(cadenaFecha));
    let diferencia = hoy.getTime() - fechaNac.getTime();
    let edad = diferencia / 1000 / 60 / 60 / 24 / 365;
    resultado.value = `${parseInt(edad)} años tienes`;
}

function calculoDiferencia() {
    let cadenaFecha = fecha1.value;
    let cadenaFecha2 = fecha2.value;
    let F1 = new Date(Date.parse(cadenaFecha));
    let F2 = new Date(Date.parse(cadenaFecha2));
    let diferencia = F1.getTime() - F2.getTime();
    let dias = diferencia / 1000 / 60 / 60 / 24;
    let minutos = diferencia / 1000 / 60;
    resultado.value = `La diferencia es dias es: ${parseInt(Math.abs(dias))} dias
y en minutos: ${parseInt(Math.abs(minutos))} minutos`;
}

function calcularInicio() {
    var restaDias = [6,0,1,2,3,4,5];
    let cadenaFecha = fecha1.value;  
    let dia = 1000*60*60*24;
    let F1 = new Date(Date.parse(cadenaFecha)); 
    let inicio = F1.getTime()-dia*restaDias[F1.getDay()];
    F1.setTime(inicio);
    resultado.value = `${F1.toString()}`;
}



