addEventListener("load", cargar, false)

function cargar() {
    var objeto_html = document.documentElement;
    alert(objeto_html.nodeName + " tipo: " + objeto_html.nodeType);

    var objeto_head = objeto_html.firstChild;
    var objeto_body = objeto_html.lastChild;

    alert(objeto_head.nodeName + " tipo: " + objeto_head.nodeType);
    alert(objeto_body.nodeName + " tipo: " + objeto_body.nodeType);
    alert(objeto_html.childNodes.length);

    var objeto_body = objeto_html.childNodes[0];
    var objeto_body = objeto_html.childNodes[1];

    alert(objeto_head.nodeName + " tipo: " + objeto_head.nodeType);
    alert(objeto_body.nodeName + " tipo: " + objeto_body.nodeType);
    
    var numeroDescendientes = objeto_html.childNodes.length;
    alert(numeroDescendientes);

    var objeto_body = document.body;

    alert(objeto_head.parentNode);
    alert(objeto_body.parentNode);
    alert(objeto_body.previousSibling);
    alert(objeto_head.nextSibling);
    alert(objeto_head.ownerDocument);
}
