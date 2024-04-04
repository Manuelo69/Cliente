addEventListener('load', cargar, false);

function cargar() {
  var ventana;
  var num = 50;
  
    boton1.addEventListener("click", function() {
       ventana = ventanaSecundaria("");
    }, false);
    boton2.addEventListener("click", function() {
      num = num+50;
      ventana.moveBy(num,0);
    },false);
}


function ventanaSecundaria (URL){ 
    var ancho = 320;
    var largo = 300;
    let parametros = `width=${ancho}px, height=${largo}px,scrollbars=NOs`;
    return window.open(URL,"ventana1",parametros);   
 } 




