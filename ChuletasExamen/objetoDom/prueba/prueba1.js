addEventListener('load', cargar, false);

function cargar() {
    var nodo = document.querySelector("p");
    alert(nodo.nodeType);
    /*for (const key in nodo) {
        alert(key + '=' + nodo[key]);
    }*/
    //nombre del nodo
    alert(nodo.nodeName);
    //valor del nodo, seguramente devuelve null
    alert(nodo.nodeValue);
    //inner para visualizar o introducir contenido
    alert(nodo.innerHTML);
    //extraer los hijos del nodo
    alert(nodo.childNodes.length);
    //visualizar los datos de los hijos
   for (let i = 0; i < nodo.childNodes.length; i++) {
    alert(nodo.childNodes[i].nodeName+" "+
    nodo.childNodes[i].nodeValue+" "+nodo.childNodes[i].innerHTML)
    
   }
};