function saluda(){
    console.log("hola");
}

function ejecuta(func){
    func();
}

ejecuta(saluda);

var saluda = function(quien){
    console.log("hola "+quien);
}

saluda("mundo");

(function() {console.log("hola mundo")}) ()

(function(quien){
    console.log("hola "+quien);
})("mundo");

function saludator(quien){
    return function(){
        alert("hola "+quien);
    }
}
var saluda = saludator("mundo");

saluda();