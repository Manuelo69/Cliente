addEventListener('load', inicio, false);

function inicio()
{
    boton.addEventListener('click', visualizar, false);
};

function visualizar()
{
    res.value = nom.value + " " + ape.value;
};
