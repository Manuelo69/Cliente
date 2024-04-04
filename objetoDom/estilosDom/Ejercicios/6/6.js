addEventListener('load', cargar, false);

function cargar() {
    var todosDiv = document.querySelectorAll("div");

    document.addEventListener('mouseover', () => {
        document.body.style.backgroundColor = `${todosDiv[0].style.backgroundColor}`;
    });
    todosDiv[1].addEventListener('mouseover', () => {
        document.body.style.backgroundColor = `${todosDiv[1].style.backgroundColor}`;
    });
    todosDiv[2].addEventListener('mouseover', () => {
        document.body.style.backgroundColor = `${todosDiv[2].style.backgroundColor}`;
    });
}





