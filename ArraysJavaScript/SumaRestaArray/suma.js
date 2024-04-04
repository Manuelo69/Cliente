addEventListener('load', inicio, false);

function inicio() {
    var aleatorio = parseInt(Math.random()*6+3);
    var a = new Array(aleatorio);
    var b = new Array(aleatorio);
    var c = new Array(aleatorio);
    for (let i = 0; i < a.length; i++) {
        a[i] = new Array(3);
        b[i] = new Array(3);
        c[i] = new Array(3);
        for (let j = 0; j < a[i].length; j++) {
            a[i][j] = Math.round(Math.random()*9+1);
            b[i][j] = Math.round(Math.random()*9+1); 
        }     
    }
    ver.addEventListener("click", function () {
    cadenaA = visualizar(a);
    cadenaB = visualizar(b);
    area.value = `Matriz A: \n${cadenaA} \n\n Matriz B:\n${cadenaB}`;
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
}

function visualizar(a){
    var cadena = "";
    for (let i = 0; i < a.length; i++) {
        for (let j = 0; j < a[i].length; j++) {
             cadena += `(`+a[i][j]+`)`+`\t`;
        }    
        cadena +=`\n`; 
    }
    return cadena;
}
