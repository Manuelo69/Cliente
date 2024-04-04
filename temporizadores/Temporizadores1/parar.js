addEventListener('load',inicio,false);

function inicio(){
    var cont = 0;

    var identificador = setInterval(sumar, 1000);
    
    boton1.addEventListener('click',function() {
        clearInterval(identificador);
        alert(`La página ha estado abierta ${cont} segundos.`)
    },false);

    function sumar(){
        cont++;
    }
}

/*addEventListener('load', cargar, false);

function cargar() {
    cont = 0;
    cont = setInterval(contador, 1000);
    boton1.addEventListener("click", function () {
        alert(`Has tardado en dar al boton: ${cont}`);
        clearInterval(cont);
    }, false);

}


function contador(cont) {
    cont = 0;
    return (cont += 1);
}

addEventListener("load",inicio,false);
let id;
let tiempo=0;
    
function inicio()
{
    temporizador();
    boton1.addEventListener("click",paroTiempo,false);
}

function temporizador()
{
    id=setInterval(segundos, 1000);
}

function segundos()
{
    tiempo+=id;
}

function paroTiempo()
{
    clearInterval(id);
    document.write("el tiempo en parar el contador es: "+tiempo+" segundos");
}
*/