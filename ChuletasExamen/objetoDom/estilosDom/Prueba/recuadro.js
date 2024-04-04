addEventListener('load', inicio, false);

function inicio() {
    var intro = document.querySelector('p');
    intro.addEventListener('mouseover', () => { cambiarColor(intro) });
    intro.addEventListener('mouseout', () => { normal(intro) });
}

function normal(intro) {
    intro.className = 'normal';
}

function cambiarColor(intro) {
    intro.className = 'recuadro';
}