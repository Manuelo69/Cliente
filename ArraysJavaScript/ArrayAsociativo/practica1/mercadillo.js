addEventListener('load', inicio, false);

function inicio() {
    var lista = new Array();
    boton1.addEventListener("click", function(){
        if (isNaN(prod.value) && stock.value != "") {
            lista[prod.value] = stock.value;
            alert(`Producto y stock añadidos`);
        } else {
            alert(`El valor introducido no es valido`);
        }
    },false);
    compra.addEventListener("click", function(){
        if (lista[buscar.value]!=undefined&&lista[buscar.value]>=cantidad.value) {
            lista[buscar.value] -= cantidad.value;
            alert(`Se han comprado ${cantidad.value} unidades de ${buscar.value}
            quedan ${lista[buscar.value]}`);
        } else {
            alert(`este producto no se encuentra disponible 
            o has comprado unidades de más`);
        }
    }, false);
    ver.addEventListener("click", function(){
        var cadena =" ";
    for (const key in lista) {
        if (Object.hasOwnProperty.call(lista, key)) {
             cadena += `(${key} ==> ${lista[key]})`;          
        }
    }
    area.value = cadena;
    },false);
};


