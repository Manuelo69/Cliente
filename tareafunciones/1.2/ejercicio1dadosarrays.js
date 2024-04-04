var dinero=100;
var arrayEstadisticas = [0,0,0,0,0,0];
var listaLabels=null;
var arrayImagenes = null;
addEventListener('load',cargar,false);

function cargar(){
    botonApostar.addEventListener("click",visualizar,false);
    botonSalir.addEventListener("click",salir,false);
    botonEstadisticas.addEventListener("click",visualizarEstadisticas,false);
    listaLabels=document.querySelectorAll(".stats");
    arrayImagenes = document.querySelectorAll(".imagen");
}

function visualizar(){ 
    
    if(numeroDado.value==""||dineroApostar.value==""){
        resultado.value=`No has introducido nada`;
    }else if(!isNaN(numeroDado.value)&&!isNaN(dineroApostar.value)){
        let acierto,money,nDado;
        [acierto,money,nDado]=apuesta(numeroDado.value,dineroApostar.value);
        
        if(acierto){
            resultado.value=`El número ${numeroDado.value} es correcto!! Dinero apostado duplicado.`;
            miDinero.value=`${money}€`;
            dado.value=`${nDado}`;
        }else if(acierto==null){
            resultado.value=`La apuesta no se ha podido realizar`;
            miDinero.value=`${money}€`;
            dado.value=`${nDado}`;
        }else{
            resultado.value=`El número ${numeroDado.value} es incorrecto!! Dinero apostado perdido.`;
            miDinero.value=`${money}€`;
            dado.value=`${nDado}`;
        }
        sumarEstadisticas(nDado);
        mostraImagen(nDado);
    }
    else{
        resultado.value=`No has escrito un número`;
    }
    
}
function mostraImagen(dado){
    mostrarImagen.innerHTML = arrayImagenes[dado-1];
}

function visualizarEstadisticas(){
    for(var i=0;i<listaLabels.length;i++){
        listaLabels[i].innerHTML=`${arrayEstadisticas[i]}`;
    }
}

function sumarEstadisticas(dado){
    arrayEstadisticas[dado-1]+=1
}

function salir(){
    alert(`Te ha quedado ${dinero}€ en la cartera`);
    self.close();
}

function crearNumDado(){
    numDado=Math.floor(Math.random()*6)+1;
    return numDado;
}

function apuesta(numero,euros){
    nDado=crearNumDado();
    if(dinero>=euros){
        if(numero==nDado){
            dinero+=parseInt(euros);
            return [true,dinero,nDado];
        }else{
            dinero-=parseInt(euros);
            return [false,dinero,nDado];
        }
    }else if(dinero==0){
        alert("Te has quedado sin dinero");
        self.close();
    }else{
        alert("La cantidad introducida es mayor a la poseida");
        return [null,dinero,nDado];
    }
}