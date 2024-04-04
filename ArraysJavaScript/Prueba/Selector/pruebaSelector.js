
        addEventListener('load', cargar, false);

        function cargar() {
            botonCambiar.addEventListener("click", cambio, false);
        }
        
        function cambio() {
            var nodeList = document.querySelectorAll("p");
            for (var i = 0; i < nodeList.length; i++) {
                nodeList[i].style.backgroundColor = "red";
            }
        }