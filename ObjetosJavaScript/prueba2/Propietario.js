function Propietario(nombre, edad, sexo) {
    this.nombre = nombre,
        this.edad = edad;
    this.sexo = sexo;
}

var fer = new Propietario("Fernando Duclouk", 38, "M");

var alvaro = new Propietario("Alvaro Caram", 36, "M");

function Coche(marca_in, modelo_in, anyo_in,
    propietario_in){
    this.marca= marca_in;
    this.modelo= modelo_in;
    this.anyo= anyo_in;
    This.propietario=propietario_in;
    }