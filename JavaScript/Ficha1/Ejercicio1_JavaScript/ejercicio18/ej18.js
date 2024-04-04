var num = 11;
var cont = 0;
var cadena = " ";
while(cont<25){
    cadena += `${num} - `;
    num += 11;
    cont++;
}
alert(`${cadena}`);