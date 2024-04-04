function CD(titulop,grupop,fechap){
    this.titulo=titulop;
    this.grupo=grupop;
    this.fecha=fechap;
    this.visualizar=visualiza;
    this.ver = verTitulo;
}

function visualiza(){
    return `Titulo: ${this.titulo}
Grupo: ${this.grupo}
Fecha: ${this.fecha}
`;
}

function verTitulo() {
    return this.titulo;
}

