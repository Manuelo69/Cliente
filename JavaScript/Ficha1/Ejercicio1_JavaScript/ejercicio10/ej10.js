var edad = parseInt(prompt(`Introduce un rango de edad
0-12: Niño
13-26: Joven
26-60: Adulto
>60: Jubilado`));

if (!isNaN(edad)) {
    switch (true) {
        case edad > 0 && edad <= 12:
            alert(`El rango es el de un niño, edad: ${edad}`);
            break;
        case edad > 12 && edad <= 26:
            alert(`El rango es el de una persona joven, edad: ${edad}`);
        case edad > 26 && edad <= 60:
            alert(`El rango de edad es el de un adulto, edad: ${edad}`);
            break
        case edad > 60:
            alert(`El rango de edad es el de un jubilado, edad: ${edad}`);
            break;
        default:
            alert(`El tipo de dato introducido no es correcto, edad: ${edad}`);
    }
} else {
    alert(`El tipo de dato introducido no es valido, edad: ${edad}`);
}
