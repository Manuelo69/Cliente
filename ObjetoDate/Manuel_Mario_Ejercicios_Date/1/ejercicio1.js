var fechaHora = new Date(2015,10,25,9,29,50);
var arrDias = ['Domingo','Lunes','Martes','Miercoles','Jueves','Viernes','Sabado'];
var arrMeses = ['Enero','Febrero','Marzo','Abril','Mayo','Junio','Julio','Agosto','Septiembre','Octubre','Noviembre','Diciembre'];

document.write(`Fecha completa: ${fechaHora}`);
document.write("<br>");
document.write(`Mes mes: ${fechaHora.getDate()}`);
document.write("<br>");
document.write(`Mes semana: ${fechaHora.getDay()}`);
document.write("<br>");
document.write(`Mes: ${fechaHora.getMonth()+1}`);
document.write("<br>");
document.write(`Año: ${fechaHora.getFullYear()}`);
document.write("<br>");
document.write(`Fecha: ${fechaHora.toLocaleDateString("ES")}`);
document.write("<br>");
document.write(`Fecha: ${arrDias[fechaHora.getDay()]} ${fechaHora.toLocaleDateString("ES")}`);
document.write("<br>");
document.write(`Fecha: ${arrDias[fechaHora.getDay()]}, ${fechaHora.getDate()} de ${arrMeses[fechaHora.getMonth()]} de ${fechaHora.getFullYear()}`);
document.write("<br>");
