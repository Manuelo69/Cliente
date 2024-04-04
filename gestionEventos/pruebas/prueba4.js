addEventListener('load', cargar, false);

function cargar() {
    capt1 = document.querySelector('#capt1')
    capt2 = document.querySelector('#capt2')
    burb1 = document.querySelector('#burb1')
    burb2 = document.querySelector('#burb2');
    capt1.addEventListener('click', divs, true);
    capt2.addEventListener('click', spans, true);
    burb1.addEventListener('click', divs, false);
    burb2.addEventListener('click', spans, false);
}

function divs(){
    alert("El evento de div acaba de desencadenarse.");
}

function spans() {
    alert("El evento de span acaba de desencadenarse.");
}

