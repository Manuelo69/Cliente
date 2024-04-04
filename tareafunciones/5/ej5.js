addEventListener("load", inicio, false);

function inicio(){
    visualizar.addEventListener("click", ver, false);
}

function ver(){
    var fact1 = sacarFactorial();
    validar(fact1);
    if(validar == true){
        res.value = fact1;
    } else {
        alert(`El número introducido no es correcto`);
    }
}

function sacarFactorial() {
    var factorial = 0;
    for(a = 1; a < fact.value; a++){
    factorial += a*fact.value;
    }
    return factorial;
}

function validar(num){
    if (isNaN(num)) {
        return false;
    }
    return true;
}