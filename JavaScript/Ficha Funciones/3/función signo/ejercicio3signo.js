addEventListener('load',cargar,false);

function cargar(){
    botonSigno.addEventListener("click",visualizar,false);
}

function visualizar(){   
    let variable1 = 5;
    if(num.value==""){
        alert(variable1);
        resultado.value=`No has introducido nada`;
    }else if(!isNaN(num.value)){
        resultado.value=`El numero ${num.value} es ${signo(num.value)}`;
    }
    else{
        resultado.value=`No has escrito un número`;
    }
    alert(variable1);
}

function signo(valor1){
    if(valor1==0){
        return "nulo";
    }else if(valor1>0){
        return "positivo";
    }else{
        return "negativo";
    }
}