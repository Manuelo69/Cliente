addEventListener('load', cargar, false);

function cargar() {
   var popup;
   var arrSalida = Array("Oviedo", "Leon", "Asturias", "Santander");
   var arrLlegada = new Array("Roma", "Paris", "Londres");
   var matriz = new Array(4);
   var arrTransportes = document.querySelectorAll('.tra');
   var arrImagenes = new Array("italia.jpg", "francia.jpg", "inglaterra.jpg");
   var indiceSalida = document.getElementById("salida");
   var indiceLlegada = document.getElementById("llegada");
   for (let i = 0; i < matriz.length; i++) {
         matriz[i] = new Array(0,0,0);
   }
   var cadena = "salidas ";
   boton1.addEventListener("click", function () {
      popup = ventanaSecundaria("");
      for (let i = 0; i < arrTransportes.length; i++) {
         if (arrTransportes[i].checked) {
            var tran = arrTransportes[i].value;
         }
      }
      popup.document.write(`La salida se realizo en: ${arrSalida[indiceSalida.selectedIndex]} `);
      popup.document.write(`el destino del viaje fue: ${arrLlegada[indiceLlegada.selectedIndex]} `);
      popup.document.write(`el método de tranporte fue: ${tran} `)
      popup.document.write(`<img src="${arrImagenes[indiceLlegada.selectedIndex]}" alt="" >`);
      matriz[indiceSalida][indiceLlegada]++;
      for (let i = 0; i < arrLlegada.length; i++) {        
         cadena += arrLlegada[i]+"\t";
      }
      for (let i = 0; i < matriz.length; i++) {
         cadena += `\n ${arrSalida[i]} \t`
         for (let j = 0; j < matriz[i].length; j++) {
            cadena += `${matriz[i][j]} \t`;           
         } 
      }
      area.value = cadena;
   }, false);
}


function ventanaSecundaria(URL) {
   var ancho = 300;
   var largo = 300;
   var letf = screen.width / 2 - (ancho / 2);
   var top = screen.height / 2 - largo / 2;
   let parametros = `width=${ancho}px, height=${largo}px,scrollbars=NO,left=${letf},top=${top}`;
   return window.open(URL, "ventana1", parametros);
}




