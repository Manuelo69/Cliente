/*1-Pon varios ejemplos de cómo podemos crear un objeto de tipo Date.*/
var fecha = new Date();
var fecha2 = new Date(Date().toString());
var fecha3 = new Date(Date.now());
var cadena = "";
var fecha4 = new Date(Date.parse(cadena));
/*2-Crear un objeto hoy con la fecha de hoy*/
var hoy = new Date(Date.now());
document.write(`fecha actual ${hoy}`);
document.write("</br>");
/*3-Crea un objeto fechacadena con una cadena de caracteres con este formato:*/
var cadena2 = "Aug 9, 1995 12:34:56";
var fechacadena = new Date(Date.parse(cadena2));
document.write(`fecha de la cadena ${fechacadena}`);
document.write("</br>");
/* 4-Crea un objeto date FechaEnteros con 3 numeros enteros que representen año, mes, dia*/
var fechaEnteros = new Date(Date.UTC(2002, 10, 12));
document.write(`fecha con enteros: ${fechaEnteros}`);
document.write("</br>");
/*5-Ahora crea otro objeto date FechaHora con números enteros que a parte de la fecha
represente horas, minutos y segundos. */
var fechaHora = new Date(Date.UTC(2002,12,12,34,45,23));
document.write(`fecha con enteros completo ${fechaHora}`);
document.write("</br>");
/*6- Vamos a investigar los métodos que nos permiten acceder a la fecha y a la hora:
Acceder a fechas: (get)

getDate()
getDay()
getHours()
getMinutes()
getSeconds()
getMonth().
getTime()
getTimezoneOffset()
getFullYear */
document.write(`obtener dia del mes ${hoy.getDate()}`);
document.write("</br>");
document.write(`obtener dia de la semanas ${hoy.getDay()}`);
document.write("</br>");
document.write(`obtener horas ${hoy.getHours()}`);
document.write("</br>");
document.write(`obtener minutos ${hoy.getMinutes()}`);
document.write("</br>");
document.write(`obtener numero del mes ${hoy.getMonth()}`);
document.write("</br>");
document.write(`obtener valor numerico de la fecha: ${hoy.getTime()}`);
document.write("</br>");
document.write(`obtener diferencia horario en min para la hora local ${hoy.getTimezoneOffset()}`);
document.write("</br>");
document.write(`obtener el año ${hoy.getFullYear()}`);
document.write("</br>");

/*Establecer fechas: (set)

setDate(número)
setHours(número)
setMinutes(número)

setSeconds(número)
setTime(número)
setFullYear(número)*/ 
fechaEnteros.setDate(20);
document.write(`cambiar el dia ${fechaEnteros.getDate()}`);
document.write("</br>");
fechaEnteros.setHours(10);
document.write(`cambiar la hora ${fechaEnteros.getHours()}`);
document.write("</br>");
fechaEnteros.setMinutes(47);
document.write(`cambiar los minutos ${fechaEnteros.getMinutes()}`);
document.write("</br>");
fechaEnteros.setSeconds(2);
document.write(`cambiar los segundos ${fechaEnteros.getSeconds()}`);
document.write("</br>");
fechaEnteros.setTime(4);
document.write(`establece cuanto le falta para llegar a la zona horaria ${fechaEnteros.getTime()}`);
document.write("</br>");
fechaEnteros.setFullYear(2012);
document.write(`cambiar el año ${fechaEnteros.getFullYear()}`);
document.write("</br>");
/*
Analizar y convertir
toGMTString(): ya no se utiliza
toLocaleString()
toString()
UTC(año, [mes], [día], [horas], [minutos], [segundos], [milisegundos])
*/
document.write(`cambiar la fecha de zona local ${fechaEnteros.toLocaleDateString('es')}`);
document.write("</br>");
document.write(`cambiar la fecha de zona local completa ${fechaEnteros.toLocaleString('es')}`);
document.write("</br>");
document.write(`escribir fecha completa ${fechaEnteros.toString()}`);
document.write("</br>");
var fechaUTC = new Date('14 Jun 2017 00:00:00 PDT');
document.write(`escribir fecha completa ${fechaUTC.toUTCString('es')}`);
document.write("</br>");