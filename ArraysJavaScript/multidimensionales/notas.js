addEventListener('load', inicio, false);

function inicio() {
    var alumnos = new Array(9);
    alumnos[0] = new Array("Ernesto", 10, 2, 6);
    alumnos[1] = new Array("Luisa", 1, 4, 6);
    alumnos[2] = new Array("Javier", 9, 6, 6);
    alumnos[3] = new Array("Maria", 3, 2, 6);
    alumnos[4] = new Array("Julián", 9, 2, 9);
    alumnos[5] = new Array("Natividad", 3, 5, 8);
    alumnos[6] = new Array("Lorena", 9, 1, 1);
    alumnos[7] = new Array("Carolina", 7, 7, 6);
    alumnos[8] = new Array("Juana", 6, 7, 9);
    alumnos[9] = new Array("Manuel", 10, 10, 10);
    /* Visualizar el listado de alumnos con sus tres notas */
    ver.addEventListener("click", function () {
        var cadena = " ";
        for (let i = 0; i < alumnos.length; i++) {
            cadena += alumnos[i] + `\n`;
        }
        area.value = cadena;
    }, false);
    /*Visualizar y calcular la media de cada alumno y guardarlo en el array
  Medias. */
    ver2.addEventListener("click", function () {
        var total = 0;
        var medias = [];
        var cadena = " ";
        for (let i = 0; i < alumnos.length; i++) {
            total = 0;
            for (let j = 1; j < alumnos[i].length; j++) {
                total += alumnos[i][j];
            }
            total = total / 3;
            medias.push(total.toFixed(2));
            cadena += `media del alumno ${alumnos[i][0]} es ${medias[i]} ` + `\n`;
        }
        area2.value = cadena;
    }, false);
    /* Visualizar y calcular la media de cada evaluación, y guardarlo en
  array MediasEval */
    ver3.addEventListener("click", function () {
        var media = 0;
        var mediasEval = [];
        for (let i = 1; i < 4; i++) {
            media = 0;
            for (let j = 0; j < alumnos.length; j++) {
                media += alumnos[j][i];
            }
            mediasEval.push((media/alumnos.length).toFixed(2));
        }
        area3.value = `La media de las evaluaciones es:
        primera: ${mediasEval[0]}
        segunda: ${mediasEval[1]}
        tercera: ${mediasEval[2]}`;
    }, false);
    /*Introducir un nombre de alumno y visualizar el nombre del alumno
    con su nota media. */
    ver4.addEventListener("click", function () {
        var nom = nombre.value;
        var media = 0;
        for (let i = 0; i < alumnos.length; i++) {
            if (alumnos[i][0] == nom) {
                for (let j = 1; j < alumnos[i].length; j++) {
                    media += alumnos[i][j];
                }
                media = media / 3;
                area4.value = `La media del alumno ${nom} es ${media.toFixed(2)}`;
                i = alumnos.length;
            } else {
                area4.value = `El alumno ${nom} no se encuentra `;
            }
        }
    }, false);
    /*Visualizar solo el que tiene la media más alta y el que la tiene más
   baja. */
    ver5.addEventListener("click", function () {
        var total = 0;
        var medias = [];
        var nombreMayor = 0;
        var nombreMenor = 0;
        for (let i = 0; i < alumnos.length; i++) {
            total = 0;
            for (let j = 1; j < alumnos[i].length; j++) {
                total += alumnos[i][j];
            }
            total = total / 3;
            medias.push(total.toFixed(2));
            var copiaMedias = medias.slice();
        }
        medias.sort(function (a, b) {
            return a - b;
        });
           nombreMenor = copiaMedias.indexOf(medias[0]);
           nombreMayor = copiaMedias.indexOf(medias[medias.length - 1])

        area5.value = `La media más baja es: ${medias[0]} del alumno ${alumnos[nombreMenor][0]}
        La media mas alta es: ${medias[medias.length - 1]} del alumno ${alumnos[nombreMayor][0]}`;
    }, false);
    /*Eliminar del array alumnos los suspensos y crear el array suspensos. */
    ver6.addEventListener("click", function () {
        var total = 0;
        var suspensos = [];
        var cadena = "";
        for (let i = 0; i < alumnos.length; i++) {
            total = 0;
            for (let j = 1; j < alumnos[i].length; j++) {
                total += alumnos[i][j];
            }
            total = total / 3;
            if (total < 5) {
                suspensos.push(alumnos[i], total.toFixed(2));
                alumnos.splice(i, 1);
            }
        }
        for (let i = 0; i < suspensos.length; i++) {
            cadena += suspensos[i] + `\n`;
        }
        area6.value = cadena;
    }, false);
}
