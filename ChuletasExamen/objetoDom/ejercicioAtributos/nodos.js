addEventListener("load", cargar, false)

function cargar() {
    boton1.addEventListener("click", informacion,false);
}

function informacion() {
    var parrafo = document.querySelector("p");
    var atributos = parrafo.attributes;
    var parrafo2 = document.querySelector("form p input");
    var atributos2 = parrafo2.attributes;
    alert(`Atributos del primer parrafo: ${atributos.length}`);
    alert(`Colección de atributos`)
    for (let i = 0; i < atributos.length; i++) {
        alert(`atributo ${i} nombre: ${atributos[i].name} valor: ${atributos[i].value}`);
    }
    alert(`accediendo por nombre`);
    for (let i = 0; i < atributos.length; i++) {
        alert(`Atributo ${i} Nombre: ${atributos[i].name} valor: ${atributos[atributos[i].name].value}`);
    }
    for (let i = 0; i < atributos2.length; i++) {
        alert(`atributo ${i} nombre: ${atributos2[i].name} valor: ${atributos2[i].value}`);
    }
    alert(`accediendo por nombre`);
    for (let i = 0; i < atributos2.length; i++) {
        alert(`Atributo ${i} Nombre: ${atributos2[i].name} valor: ${atributos2[atributos2[i].name].value}`);
    }
}
