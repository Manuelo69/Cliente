function Coche(marca_in, modelo_in, anyo_in,
    propietario_in) {
    this.marca = marca_in;
    this.modelo = modelo_in;
    this.anyo = anyo_in;
    this.propietario = propietario_in;
}

var auto1 = new Coche("Eagle", "Talon TSi", 1993, fer);
var auto2 = new Coche("Nissan", "300ZX", 1992, alvaro);

//acceder al nombre
alert(auto2.propietario.nombre)