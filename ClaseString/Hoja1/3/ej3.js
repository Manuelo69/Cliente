addEventListener('load', inicio, false);

function inicio() {

    boton1.addEventListener("click", ver1, false);
}

function ver1() {
    var caracter = verOctavoCaracter(cadena.value);
    var posicionI = verPosicionInicial(cadena.value, caracter);
    var posicionF = verPosicionFinal(cadena.value, caracter);
    var textoExtraido = extraer(cadena.value, posicionI, posicionF);
    let finalTexto=maymin(textoExtraido);
    area.value = `El octavo caracter es ${caracter}
    aparece por primera vez en la posicion ${posicionI} y por ultima en ${posicionF}
    texto que aparece entre las dos posiciones: ${textoExtraido} 
    texto cambiado con mayusculas y minusculas: ${finalTexto}`;

}

function extraer(cad, pos1, pos2) {
    return cad.substring(pos1, pos2 - pos1- 1);

}

function verOctavoCaracter(cad) {
    if (validacion(cad)) {
        return cad.charAt(7);
    } else {
        area.value = "La cadena no es valida";
    }
}

function verPosicionInicial(cad, car) {
    var posicion = cad.indexOf(car);
    return posicion ;
}

function verPosicionFinal(cad, car) {
    var posicion = cad.lastIndexOf(car);
    return posicion;
}

function maymin(cad)
{
    let final="";
    for(let i=0;i<cad.lenght;i++)
    {
        if(i%2==0)
        {
            final=final+cad.charAt(i).toUpperCase();
        }
        else
        {
            final=final+cad.charAt(i).toLowerCase();
        }
    }

    return final;
}

function validacion(cad) {
    if (cad.lenght <= 9) {
        return false;
    } else {
        return true;
    }
}