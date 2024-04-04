var hoy = new Date(Date.now());
document.write(`cambiar la fecha de zona local ${hoy.toLocaleDateString('es')}`);
document.write("</br>");
document.write(`cambiar la fecha de zona local completa ${hoy.toLocaleString('es')}`);
document.write("</br>");
document.write(`escribir fecha completa ${hoy.toString()}`);
document.write("</br>");
document.write(`escribir fecha completa ${hoy.toUTCString()}`);
document.write("</br>");