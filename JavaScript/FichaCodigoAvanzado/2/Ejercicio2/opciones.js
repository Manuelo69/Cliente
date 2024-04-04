addEventListener('load', inicio, false);

function inicio() {
    suma.addEventListener("click", sumar, false);
};


function sumar() {

    resultado.value = parseInt(n1.value) + parseInt(n2.value) + parseInt(n3.value) + parseInt(n4.value);

};

