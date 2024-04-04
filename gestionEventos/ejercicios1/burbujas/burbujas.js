addEventListener('load', cargar, false);

function cargar() {
    var identificador;
    var contador = 0;
    var tiempo = 0;
    var borrados = 0;
    boton1.addEventListener("click", function () {
        divBody = document.querySelector("div");
        identificador = setInterval(function () {
            var r = Math.floor(Math.random() * 255);
            var g = Math.floor(Math.random() * 255);
            var b = Math.floor(Math.random() * 255);
            var a = Math.random() * 1;
            var dimensiones = Math.floor(Math.random() * 200);
            var margenTop = Math.floor(Math.random() * window.innerHeight);
            var margenizq = Math.floor(Math.random() * window.innerWidth);
            let d = document.createElement("div");
            d.style.position = `absolute`;
            d.style.backgroundColor = `rgba(${r},${g},${b},${a})`;
            d.style.height = `${dimensiones}px`;
            d.style.width = `${dimensiones}px`;
            d.style.marginTop = `${margenTop}px`;
            d.style.marginLeft = `${margenizq}px`;
            d.style.borderRadius = `50%`;
            document.body.appendChild(d);
            contador++;
            tiempo++;
               d.addEventListener("click", function () {
                d.remove();
                borrados++;
            })
            /*Explotar burbujas*/
        }, 600);
          
        
    })
    boton2.addEventListener("click", function () {
        clearInterval(identificador);
        arrayDiv = document.querySelectorAll("div");
        for (let i = 0; i < arrayDiv.length; i++) {
            arrayDiv[i].remove();
            
        }
        alert(`has creado ${contador} circulos, en un tiempo de ${(tiempo * 19 /6).toFixed(2)} segundos y has borrado: ${borrados}`);
    })

}





