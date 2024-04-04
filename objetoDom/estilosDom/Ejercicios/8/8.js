addEventListener('load', cargar, false);

function cargar() {
    var array = [];
    var sec1 = document.querySelector(".selector");
    var sec2 = document.querySelector(".listar");
    boton1.addEventListener("click", function () {
        array.push(caja.value);
    }, false)
    boton2.addEventListener("click", function () {
        var selAntigua = document.querySelector("select");
        if (selAntigua != null) {
            selAntigua.remove();
        }
        var sel = document.createElement("select");
        for (let i = 0; i < array.length; i++) {
            let opt = document.createElement("option");
            let texto = document.createTextNode(`${array[i]}`);
            opt.appendChild(texto);
            opt.value = `opcion ${i + 1}`
            sel.appendChild(opt);
        }
        sec1.appendChild(sel);
    }, false)
    boton3.addEventListener("click", function () {
        var olAntigua = document.querySelector("ol");
        if (olAntigua != null) {
            olAntigua.remove();
        }
        var inicioLista = document.createElement("ol");
        for (let i = 0; i < array.length; i++) {
            let datoLista = document.createElement("li");
            let texto = document.createTextNode(`${array[i]}`);
            datoLista.appendChild(texto);
            inicioLista.appendChild(datoLista);
        }
        sec2.appendChild(inicioLista);
    }, false)
    boton4.addEventListener("click", function () {
        var lista = document.querySelectorAll("li");
        for (let i = 0; i < array.length; i++) {
            if (i + 1 == datoBorrar.value) {
                lista[i].remove();
            }
        }
    }, false);
    boton5.addEventListener("click", function () {
        var opciones = document.querySelectorAll("option");
        var lista = document.querySelectorAll("li");
        var longitud = array.length; 
        for (let i = 0; i < longitud; i++) {
            opciones[i].remove();
            array.pop();
            lista[i].remove()
        }
    }, false);

}
