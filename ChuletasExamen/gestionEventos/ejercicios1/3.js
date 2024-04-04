addEventListener('load', cargar, false);

function cargar() {
    //document.addEventListener("mousemove",muestraInformacion,false);
    boton1.addEventListener("click", function(){
        alert("muy bien titan");
    }, true);
    boton2.addEventListener("mouseover", function(){
        var numero1 = Math.ceil(Math.random()*window.innerHeight+1);        
        if (boton2.style.marginleft = "0px") {
            boton2.style.margin = numero1+"px";
        } else {
            boton2.style.margin = "0px";
        }
    }, false);

}

