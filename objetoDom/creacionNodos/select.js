addEventListener('load', cargar, false);

function cargar() {
    //llenar select de opciones
    var sel = document.createElement("select");
    document.body.appendChild(sel);
    for (let i = 0; i < 20; i++) {
        let opt = document.createElement("option");
        let texto = document.createTextNode(`linea${i + 1}`);
        opt.appendChild(texto);
        opt.value = `opcion ${i + 1}`;
        sel.appendChild(opt);
    }
    //hacer una lista con opciones
    var inicioLista = document.createElement("ol");
    document.body.appendChild(inicioLista);
    for (let i = 0; i < 15; i++) {
        let datoLista = document.createElement("li");
        let texto = document.createTextNode(`Manzana${i + 1}`);
        datoLista.appendChild(texto);
        inicioLista.appendChild(datoLista);
    }
    //clonar lista colgada del body
    var selectClonado = sel.cloneNode(true);
    document.body.appendChild(selectClonado);
    var listaNueva = inicioLista.cloneNode(true);
    document.body.appendChild(listaNueva);
    document.body.replaceChild(document.body.firstChild, document.body.lastChild)

}
