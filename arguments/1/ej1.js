function sumar() {
    var s = 0;
    for (let i = 0; i < arguments.length; i++) {
        if (!isNaN(arguments[i])) {
            s = s + arguments[i];
        }
    }
    return s;
}
document.write(sumar(2, 4));
document.write('<br>');
document.write(sumar(1, 2, 3, 4, "m", 5));
document.write('<br>');
document.write(sumar(100, 200, 300));