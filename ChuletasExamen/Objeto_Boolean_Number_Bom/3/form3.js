addEventListener('load', cargar, false);

function cargar() {
    boton1.addEventListener("click", nuevaVentana, false);
}

function nuevaVentana() {
  ventanaSecundaria("https://es.stackoverflow.com/questions/37242/escribir-en-una-ventana-secundaria");

}

function ventanaSecundaria (URL){ 
    var ancho = 320;
    var largo = 300;
    var letf = screen.width/2-(ancho/2);
    var top = screen.height/2-largo/2;
    let parametros = `width=${ancho}px, height=${largo}px,scrollbars=NO,left=${letf},top=${top}`;
    var ventana = window.open(URL,"ventana1",parametros);
    ventana.document.write(`El tamaño de esta ventana es ${ancho}x${largo}px`)
    
 } 




