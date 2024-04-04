
function separador(separador){
    var cadena = " ";
for (let index = 1; index < arguments.length; index++) {
    if(index==arguments.length-1){
        cadena = cadena+arguments[index];
    } else {
        cadena = cadena+arguments[index]+separador;
    }
}
return cadena;
}

document.write(separador("-", "Perro","Gato","Lechuza"));
document.write('<br>');
document.write(separador("/","15-08-15","16-09-15","31-12-15"));
document.write('<br>');
document.write(separador(" le robo el corazon a ","Maria","Luis","Juan","Valeria","Carlos","Jesus"));
