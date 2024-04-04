addEventListener('load', inicio, false);

function inicio() {
    //hago un array dimensionando con un numero entre 1 y 50
    var aleatorioDimension = Math.round(Math.random() * 50);
    alert(`Gente encuestada ${aleatorioDimension}`);
    var gente = new Array(aleatorioDimension);
    var sexo = new Array("Sexo Masculino", "Sexo Femenino");
    var trabaja = new Array("Trabajador", "No trabajador");
    //Inicializo el array utilizando los diferentes metodos y metiendo por posicion el dato que quiero
    //No puedo hacerlo con push porque sino me lo guarda todo en una sola posición y casca
    for (let i = 0; i < gente.length; i++) {
        gente[i] = new Array();
        var aleatorioSexo = Math.round(Math.random() * 1 + 0);
        var aleatorioTrabaja = Math.round(Math.random() * 1 + 0);
        gente[i].push(obtenerCedula(), obtenerDato(sexo, aleatorioSexo),
            obtenerDato(trabaja, aleatorioTrabaja), obtenerSueldo(aleatorioTrabaja));
    }
    //utilizando el id de la imagen y la instrucción src cambio la imagen a la primera
    verListado.addEventListener("click", function () {
        area.value = listar(gente);
    }, false);
    //Metodo para obtener dato de los array gente y sexo
    function obtenerDato(array, num) {
        return array[num];
    }
    //funcion para obtener el sueldo comprobando si trabaja introduciendo el numero aleatorio
    function obtenerSueldo(num) {
        if (num == 1) {
            return `Sueldo: 0`;
        } else {
            return `Sueldo: ${Math.round(Math.random() * 3000 + 300)}`;
        }
    }
    //funcion para obtener la cedula
    function obtenerCedula() {
        return `Cédula: ${Math.round(Math.random() * 99999 + 11111)}`;
    }
    //función para escribir la lista de los datos de la gente encuestada
    function listar(array) {
        var cadena = "";
        for (let i = 0; i < array.length; i++) {
            cadena += `Persona ${i + 1} \n`;
            for (let j = 0; j < array[i].length; j++) {
                cadena += `\t ${array[i][j]} \n`;
            }
        }
        return cadena;
    }

}


