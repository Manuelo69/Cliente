addEventListener('load', inicio, false);
var evaluados = 0;

function inicio() {
    sal.addEventListener('click', salir, false);
    res.addEventListener('click', visualizar, false);
}

function visualizar() {

    [medFinal, apfinal] = parseFloat(calculoNota(n1.value, n2.value, n3.value));
    validar(medFinal, apfinal);
    final.value = medFinal;
    contador++;
}


function calculoNota(a, b, c) {
    var media = ((parseFloat(a) + parseFloat(b) + parseFloat(c)) / 3).toFixed(2);
    var apto2 = apto(media);
    return [media, apto2];
}

function apto(num) {
    if (num >= 5) {
        apt.value = `Apto`;
    } else {
        apt.value = `No apto`;
    }
}

function salir() {
    alert(`La cantidad de alumnos evaluados es ${evaluados}`);
}