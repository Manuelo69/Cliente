addEventListener('load', cargar, false);

function cargar() {
    var ventana;
    boton1.addEventListener("click", nuevaVentana, false);
    boton2.addEventListener("click", salir, false);


function nuevaVentana() {
    let parametros = "width=200px, height=30px";
    ventana = window.open("","/",parametros);
    // return window.open("","/",parametros);
}

function salir() {
    //var ventana = nuevaVentana();
    ventana.close();
}

}
