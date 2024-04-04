addEventListener('load', inicio, false);
var extras=0;

function inicio(){
    suma.addEventListener("click", visualization, false);
    anyadir.addEventListener("click", extra,false);
};

function visualization() {
    total.value=extras;
};
function extra() {
    resultado.value = parseInt(num1.value);
    extras++;
}
