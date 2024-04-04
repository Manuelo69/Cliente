var texto = "por cien cañones por banda poema de Espronceda";
var contador=1;
for(let i=0;i<texto.length;i++)
{
    if(texto.charAt(i)==" ")
    {
        contador++;
    }
}
var posicion = texto.indexOf("Espronceda");
document.write(`En el texto hay ${contador} palabras`);
document.write("</br>");

var textoSeparado1 = texto.substring(0,posicion-1);
var textoSeparado2 = texto.substring(posicion,texto.length);
var textoFinal = textoSeparado1.concat(".".concat(textoSeparado2));
document.write(`${textoFinal}`);
