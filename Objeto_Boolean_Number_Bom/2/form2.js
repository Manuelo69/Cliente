addEventListener('load', cargar, false);

function cargar() {
    boton1.addEventListener("click", nuevaVentana, false);
}

function nuevaVentana() {
    var aleatorio = Math.floor(Math.random()*1000+1);
    var aleatorio2 = Math.floor(Math.random()*1000+1);
    ventanaSecundaria(aleatorio,aleatorio2);
}

function ventanaSecundaria (aleatorio,aleatorio2){    
    let parametros = "width=200px, height=130px,scrollbars=NO";
    var ventana = window.open("","ventana1",parametros); 
    ventana.moveTo(aleatorio,aleatorio2);
    ventana.focus();
 } 



