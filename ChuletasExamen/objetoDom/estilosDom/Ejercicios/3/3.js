addEventListener('load', cargar, false);

function cargar() {
    tit.addEventListener("click", atributo, false);
    cambio.addEventListener("click",cambiar,false);
}

function atributo() {
    var par = document.querySelector("p");
    alert(par.getAttribute("title"));
}

function cambiar() {
    var par = document.querySelector("p");
    par.setAttribute("title",cam.value);  
}