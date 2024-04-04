function media(valor1, valor2){
    var resultado;
    resultado = (valor1+valor2)/2;
    return resultado;
}

var num1 = parseFloat(prompt(`Introduce el primer número`));
var num2 = parseFloat(prompt(`Introduce el segundo número`));
var miMedia;
miMedia = media(num1,num2);
document.write(miMedia);