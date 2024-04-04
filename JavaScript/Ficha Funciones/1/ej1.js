var pares = false;
function par(num) {
    if (!isNaN(num)) {
        if (num % 2 == 0) {
            pares = true;
        } 
    } else {
        alert(`Dato introducido por parametro no válido`);
    }
}

function visualizar(){
    if(par==true){
        document.write(`El número ${num} es par`);
    } else{
        document.write(`El numero ${num} es impar`);
    }
}

par(2);
visualizar;