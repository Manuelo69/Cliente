addEventListener('load', inicio, false);

function inicio(){
    visualizar.addEventListener("click", visualization, false);
};

function visualization() {

    resultado.value = nombre.value + `, ` + apellido.value;

};
