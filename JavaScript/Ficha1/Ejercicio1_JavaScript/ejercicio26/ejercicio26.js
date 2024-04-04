var cont = 0;
do {
    var num = parseInt(prompt(`Introduce un numero`));
    if (isNaN(num)) {
        alert(`Uno de los datos introducidos no es válido, por favor, vuelve a intentarlo`);
    } else {
        cont++;
    }
} while (cont < 1);

for(a = 0; a < 10; a++){

    document.write(num+" multiplicado por "+(a+1)+" es igual a "+num*(a+1)+"<br/>");
}