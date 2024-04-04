addEventListener("load", inicio, false);
var dinero = 50;

function inicio(){
    apostar.addEventListener("click", ver, false);
}

function ver(){
    while(salir==true||dinero>0){
    var aleatorio = numeroRamdon();
    validar(num.value, din.value);
    if(validar==true){
        var dinApuesta = apuesta();
    } else {
        alert(`Apuesta no valida`);
    }
    var salir = confirm(`Quieres salir de esta partida`);
    }
}

function numeroRamdon() {
var ramd = Math.floor(Math.random() * 6);
return ramd;   
}

function validar(num1,num2){
    if (isNaN(num)||isNaN(num2)||(num2>dinero)) {
        return false;
    }
    return true;
}

function apuesta(){
    var ram = numeroRamdon();
    if(ram == num.value){
        dinero = dinero + din.value; 
    res.value = `Apuesta ganada, tu dinero es ${dinero}
    El numero aleatorio fue ${ram}`;
    } else {
        dinero = dinero - din.value; 
        res.value = `Apuesta perdida, tu dinero es ${dinero}
        El numero aleatorio fue ${ram}`;
    }
    return dinero;
}

