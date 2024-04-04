addEventListener('load', cargar, false);

function cargar() {
   var ventana;
   var cont = 0;
   var top = window.innerHeight;
   var identificador;

   boton1.addEventListener("click", function () {
      ventana = ventanaSecundaria("");
      ventana.document.write(`me caigo`);
      identificador = setInterval(mover, 1000)
   }, false);
   function mover() {
      num = 50;
      cont += 50;

      ventana.moveBy(0, num);
      console.log(num + "-" + top);
      if (cont > top) {
         console.log(num + "-dentro: " + top);
         clearInterval(identificador);
         ventana.document.write(` llego`);
         setTimeout(function () {
            ventana.close();
         }, 3000);
      }
   }

}

function ventanaSecundaria(URL) {
   var ancho = 120;
   var largo = 100;
   let parametros = `width=${ancho}px, height=${largo}px,scrollbars=NOs`;
   return window.open(URL, "ventana1", parametros);
}




