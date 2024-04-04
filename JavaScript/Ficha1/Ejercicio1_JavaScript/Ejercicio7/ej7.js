var suma = 0;
var cont = 0;
while (cont < 3) {
    var num = parseInt(prompt(`Introduce una nota`));
    suma += !isNaN(num) ? num : 0;
    cont++;
}
var final = suma / 3;

if (final >= 5) {
    alert(`Si promociona con nota ${final.toFixed(2)}`);
} else {
    alert(`No promociona con nota ${final.toFixed(2)}`);
}

