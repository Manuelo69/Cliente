addEventListener('load', cargar, false);

function cargar() {
    //crear parrafo h1 con texto
    var h = document.createElement("h1");
    var t = document.createTextNode("HOLA MUNDOOO");
    h.appendChild(t);
    //meter en el body lo creado
    document.body.appendChild(h);
    var att = document.createAttribute("class");
    att.value = "prueba";
    h.setAttributeNode(att);
    //texto creado dentro de un div
    var p1 = document.createElement("p");
    var parrafo = document.createTextNode("texto de ejemplo para el div");
    p1.appendChild(parrafo);
    var div1 = document.querySelector("div");
    div1.appendChild(p1);
    //insertar antes del primer p
    var p2 = document.createElement("p");
    var parrafoAnterior = document.createTextNode("Este va antes travieso ")
    p2.appendChild(parrafoAnterior)
    div1.insertBefore(p2, p1);
    //eliminar un nodo, primero el padre y luego el hijo
    div1.removeChild(p1);
    for (let i = 0; i < 10; i++) {
        var p3 = document.createElement("p");
        var parrafo3 = document.createTextNode(`linea ${i + 1}`);
        p3.appendChild(parrafo3);
        div1.appendChild(p3);
    }
    for (let i = 0; i < 3; i++) {
        var p3 = document.createElement("h2");
        var parrafo3 = document.createTextNode(`linea ${i + 1}`);
        p3.appendChild(parrafo3);
        div1.appendChild(p3);
    }
    for (let i = 0; i < 10; i++) {
        var p3 = document.createElement("strong");
        var parrafo3 = document.createTextNode(`linea ${i + 1} `);
        p3.appendChild(parrafo3);
        div1.appendChild(p3);
    }
    for (let i = 0; i < 10; i++) {
        var p3 = document.createElement("a");
        var parrafo3 = document.createTextNode(`linea ${i+1} `);
        p3.appendChild(parrafo3);  
        div1.appendChild(p3);
        }
    boton1.addEventListener("click", function() {        
        if (div1.hasChildNodes) {
            while (div1.childNodes>=1) {
                divId.remove(div1.firstChild)
            }
        }
    }, false);
  
}

