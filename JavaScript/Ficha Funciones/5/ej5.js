addEventListener('load', inicio, false);
var evaluados = 0;

function inicio() {
    fact.addEventListener('click', visualizar, false);
}

function visualizar() {
  var fac = calculoNota(n1);
  var facvalidado = validar(fac);
  final.value = facvalidado;
}


function factorial(num) {
 for(a = 1; a< num; a++){
 factorial1 += num*a;
 }
 return factorial1;
}

function validar(fact) {
 if(isNaN(fact)){
     return fact;
 } else {
     alert(`No es valido el factorial`);
 }
}

