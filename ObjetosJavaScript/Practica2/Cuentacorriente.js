function Cuentacorriente(DatosC, numC, saldoC) {
    this.DatosPersonales = DatosC;
    this.numCuenta = numC;
    this.saldo = saldoC;
    this.verNombre = visualizar;
    this.datosCuenta = verTodo;
    this.aumento = abono;
    this.decremento = cargo;
}

function visualizar() {
    return `${this.DatosPersonales.nombre}`;
}

function verTodo() {
    return `Numero de cuenta ${this.numCuenta}
Saldo: ${this.saldo}
Nombre ${this.DatosPersonales.nombre}
dni ${this.DatosPersonales.dni}
direccion ${this.DatosPersonales.direccion}
telefono ${this.DatosPersonales.telefono}`;
}

function abono(ingreso) {
    return parseInt(this.saldo) + ingreso;
}

function cargo(retiro) {
    return this.saldo - retiro;
}


