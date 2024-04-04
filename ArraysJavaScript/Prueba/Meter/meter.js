addEventListener('load', cargar, false);

function cargar() {
    sumar.addEventListener("click", cambio, false);
}

function cambio() {
  meter2.value += 1;
}