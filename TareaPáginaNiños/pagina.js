addEventListener('load', cargar, false);

function cargar() {
    frasesParaCompletar = new Array(4);
    frasesParaCompletar[0] = "La ciencia siempre vale la ----- , porque sus ----- , tarde o temprano, ----- se aplican";
    frasesParaCompletar[1] = "Las matemáticas son la ----- y la llave a la -----";
    frasesParaCompletar[2] = "Quizá la más grande ----- de la historia es que nadie ----- las lecciones de la -----";
    frasesParaCompletar[3] = "Érase una vez una joven ----- que llevaba un cubo de leche en la -----, camino al mercado para venderla";
    palabrasParaCompletar = new Array(4);
    palabrasParaCompletar[0] = new Array("pena", "descubrimientos", "siempre");
    palabrasParaCompletar[1] = new Array("puerta", "ciencia");
    palabrasParaCompletar[2] = new Array("lección", "aprendió", "vida");
    palabrasParaCompletar[3] = new Array("lechera", "cabeza");
    imagenes = new Array("Ciencia.jpg", "mate.jpg", "historia.jpg", "lengua.jpg")
    var div1 = document.querySelector(".frasesCompletas");
    var div2 = document.querySelector(".palabras");
    var ArrayPalabras = [];
    var indice1;
    var contador = 0;
    var oportunidad = 1;
    boton1.addEventListener("click", function () {
        oportunidad = 1;
        contador = 0;
        indice1 = document.querySelector("select").selectedIndex;
        var cadena = frasesParaCompletar[indice1];
        var frasesSeparadas = cadena.split(" ");
        for (let i = 0; i < frasesSeparadas.length; i++) {
            if (frasesSeparadas[i].indexOf("-----") != -1) {
                let span = document.createElement("span");
                let texto = document.createTextNode(frasesSeparadas[i] + " ");
                span.appendChild(texto);
                div1.appendChild(span);
            } else {
                let parrafo = document.createElement("strong");
                let texto = document.createTextNode(frasesSeparadas[i] + " ");
                parrafo.appendChild(texto);
                div1.appendChild(parrafo);
            }
        }
        var sel = document.createElement("select");
        div2.appendChild(sel);
        for (let i = 0; i < palabrasParaCompletar[indice1].length; i++) {
            let opt = document.createElement("option");
            let texto = document.createTextNode(palabrasParaCompletar[indice1][i]);
            opt.appendChild(texto);
            sel.appendChild(opt);
        }
        imagen.src = imagenes[indice1];

    }, false);
    boton2.addEventListener("click", function () {
        var parrafos = document.querySelectorAll("strong");
        var spans = document.querySelectorAll("span");
        let sel = document.querySelector(".palabras select");
        for (let i = 0; i < parrafos.length; i++) {
            div1.removeChild(parrafos[i]);
        }
        for (let i = 0; i < spans.length; i++) {
            div1.removeChild(spans[i]);
        }
        sel.remove();
        /*for (let i = 0; i < spans.length; i++) {
            div2.removeChild(spans[i]);
        }*/
        imagen.src = null;
    }, false);
    boton3.addEventListener("click", function () {
        var opciones = document.querySelectorAll(".palabras select option");
        var indice = document.querySelector(".palabras select").selectedIndex;
        var spans = document.querySelectorAll("span");
        var spans2 = document.querySelectorAll(".fallidas");

        /*let span = document.createElement("span");
        let texto = document.createTextNode(opciones[indice]);
        span.appendChild(texto);*/
        if (oportunidad == 1) {
            spans[contador].innerHTML = opciones[indice].value;
            opciones[indice].remove();
            contador++;
        } else {
            spans2[contador].innerHTML = opciones[indice].value;
            opciones[indice].remove();
            contador++;
        }

    })
    boton4.addEventListener("click", function () {
        var spans = document.querySelectorAll("span");
        indice1 = document.querySelector("select").selectedIndex;
        for (let i = 0; i < spans.length; i++) {
            if (spans[i].innerHTML == palabrasParaCompletar[indice1][i]) {
                spans[i].className = "verde";
            } else {
                spans[i].className = "rojo";
            }
        }
    })
    boton5.addEventListener("click", function () {
        var spans = document.querySelectorAll("span");
        var opciones = document.querySelector(".palabras select");
        for (let i = 0; i < spans.length; i++) {
            if (spans[i].innerHTML != palabrasParaCompletar[indice1][i]) {
                let opt = document.createElement("option");
                let texto = document.createTextNode(spans[i].innerHTML);
                opt.appendChild(texto);
                opciones.appendChild(opt);
                spans[i].innerHTML = "-----";
                spans[i].classList.remove("rojo");
                spans[i].className = "fallidas";
            }
        }
        oportunidad++;
        contador = 0;
    }, false)
}


