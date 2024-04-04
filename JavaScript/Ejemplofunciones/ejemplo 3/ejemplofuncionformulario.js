addEventListener('load',cargar,false);

function cargar(){
    botonMedia.addEventListener("click",visualizar,false);
}

function visualizar(){   
    if(num1.value==""||num2.value==""){
        resultado.value=`No has introducido nada`;
    }else if(!isNaN(num1.value)&&!isNaN(num2.value)){
        resultado.value = `La media es ${media(num1.value,num2.value)}`;
    }
    else{
        resultado.value=`No has escrito un número`;
    }
}

function media(valor1,valor2){
    var resultado=0;
    resultado=(parseFloat(valor1)+parseFloat(valor2))/2;
    return resultado;
}