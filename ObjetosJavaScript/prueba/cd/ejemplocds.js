var arrCDS = new Array();
var bool = false;
var crear = true;


addEventListener('load', cargar, false);

function cargar() {
    botonIntroducir.addEventListener("click", introducirCD, false);
    botonVisualizar.addEventListener("click", visualizarAlumnos, false);
    botonValorCD.addEventListener("click", meterPrecio, false);
    botonCrearDiscos.addEventListener("click", crearBurbujas, false)
}

function introducirCD() {
    let t = tituloCD.value;
    let g = nomGrupo.value;
    let f = fechaCD.value;
    cd = new CD(t, g, f);
    arrCDS.push(cd);
    tituloCD.value = "";
    tituloCD.focus();
    nomGrupo.value = "";
    botonValorCD.disabled = false;
}

function visualizarAlumnos() {
    resultado.value = ``;
    let suma = 0;
    for (let i = 0; i < arrCDS.length; i++) {
        resultado.value += arrCDS[i].visualizar();
        if (bool) {
            suma += arrCDS[i].precio;
            resultado.value += `Precio: ${arrCDS[i].precio}€`;
        } else {
            resultado.value += `Precio: -----€`;
        }
    }
    if (bool) {
        resultado.value += `\nPrecio Total del Lote: ${suma}`;
    } else {
        resultado.value += `\n Precio Total del Lote: -----€`;
    }

}

function meterPrecio() {
    CD.prototype.precio = 0;
    bool = true;
    for (let i = 0; i < arrCDS.length; i++) {
        arrCDS[i].precio = parseInt(Math.random() * 20) + 20;
    }
    botonValorCD.disabled = true;
}

function crearBurbujas() {
    let divBody = document.querySelector("div");
    if (crear) {
        for (let i = 0; i < arrCDS.length; i++) {
            let r = Math.floor(Math.random() * 255);
            let g = Math.floor(Math.random() * 255);
            let b = Math.floor(Math.random() * 255);
            var a = Math.random() * 1;
            let d = document.createElement("div");
            d.style.backgroundColor = `rgba(${r},${g},${b},${a})`;
            d.style.float = `left`;
            d.style.width = `80px`;
            d.style.height = `80px`;
            d.style.borderRadius = `50%`;
            d.style.border = `solid black`;
            d.classList.add = "disco";
            let texto = document.createTextNode(arrCDS[i].ver());
            d.appendChild(texto);
            divBody.appendChild(d);
            d.addEventListener("mouseover", function () {
                let cadena = "";
                cadena = arrCDS[i].visualizar()+"Precio "+arrCDS[i].precio;
                resultado.value = cadena;
            })
        }
        crear = false;
        botonCrearDiscos.value = "Borrar Discos Graficos"
    } else {
        let divDiscos = document.querySelectorAll("#espacio div");
        for (let i = 0; i < divDiscos.length; i++) {
            divDiscos[i].remove();
        }
        crear = true;
        botonCrearDiscos.value = "Crear Discos Graficos";
    }
}