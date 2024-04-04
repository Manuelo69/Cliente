addEventListener('load', cargar, false);

function cargar() {
    var parent = document.querySelector('#parent')
    var child = document.querySelector('#child')
    child.addEventListener('click', hijo, true);
    capt2.addEventListener('click', padre, true);
}

function hijo(e){
    e.stopPropagation();
    alert("child clicked");
}

function padre(e) {
    alert("parent clicked");
}

