
var carnes = ["Ternera", "cerdo", "pollo", "Vaca", "Mixta"];
var ingredientes = ["lechuga", "tomate", "cebolla", "queso", "jamon", "bacon", "huevo"];
var pan = ["trigo", "centeno", "integral", "crujiente"];
var preciosCarne = [3, 2, 2.5, 4, 3.5];
var preciosPan = [2, 1.5, 2.5, 3];
var listaIngredientes = null;
var listaCarnes = null;
var listaPanes = null;
var listaCarnes2 = null;
var precio = 0;
addEventListener('load', cargar, false);

function cargar() {
    //hamburguesas.addEventListener("change", visualizar, false);
    pre.addEventListener("click", visualizar2, false);
    precioDeLaCarne.addEventListener("click", visualizar4, false);
    panes.addEventListener("change", visualizar3, false);
    boton.addEventListener("click", generarTicket, false);
    listaCarnes = document.querySelectorAll(".ing");
    listaCarnes2 = document.querySelectorAll(".car");
    listaIngredientes = document.querySelectorAll(".check");
    listaPanes = document.querySelectorAll(".p");
}

/*function visualizar() {
    precioCarne.innerHTML =
        `El precio de la carne de ${carnes[hamburguesas.selectedIndex]
        } es: ${preciosCarne[hamburguesas.selectedIndex]}`;
    return hamburguesas.selectedIndex;
}*/

function visualizar4() {
    var indice = 0;
    for (let index = 0; index < listaCarnes2.length; index++) {
        if (listaCarnes2[index].checked == true) {
            indice = index;
        }
    }
    precioCarne2.innerHTML = `El precio de la carne de ${carnes[indice]
        } es: ${preciosCarne[indice]}`;
        return [carnes[indice],preciosCarne[indice]];
}

function visualizar2() {
    var cantidadIngredientes = 0;
    var cadena = " ";
    for (let index = 0; index < ingredientes.length; index++) {
        if (listaIngredientes[index].checked == true) {
            cantidadIngredientes++;
            cadena = cadena + ingredientes[index]+",";
        }
    }
    precio = (cantidadIngredientes * 0.4).toFixed(2);
    precioing.innerHTML = `El precio de los ingredientes: ${cadena} es: ${precio}`;
    return [precio, cadena];
}

function visualizar3() {
    precioPan.innerHTML = `El precio del pan de ${pan[panes.selectedIndex]} es
     ${preciosPan[panes.selectedIndex]}`;
    return [pan[panes.selectedIndex], preciosPan[panes.selectedIndex]];
}

function generarTicket() {
    var carne = null;
    var preciocarne = null;
    var ingredientes = null;
    var cadena = null;
    var panes = null;
    var precioPan = null;
    [carne, preciocarne] = visualizar4();
    [ingredientes, cadena] = visualizar2();
    [panes, precioPan] = visualizar3();
    precioFinal = (parseFloat(preciocarne) + parseFloat(ingredientes) + parseFloat(precioPan));
    ticket.value = `El precio de la carne ${carne} es ${preciocarne}
    El precio de los ingredientes ${cadena} es ${ingredientes}
    El precio del pan de ${panes} es ${precioPan}
    El precio final es ${precioFinal}`;
}



