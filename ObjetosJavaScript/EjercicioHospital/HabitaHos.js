
class HabitaHos {
    constructor(num,codPacienteH, fotoH) {
        this.nHabitacion = num;
        this.codPaciente = codPacienteH;
        this.foto = fotoH;
        this.tratamiento = new Array();
    }

    get _nHabitacion() {
        return this.nHabitacion;
    }

    get _codPaciente() {
        return `Codigo: ${this.codPaciente}`;
    }

    toStringTratamiento() {
        let cadena = "";
        for (let i = 0; i < this.tratamiento.length; i++) {
            cadena += this.tratamiento[i] + ",";
        }
        return cadena;
    }

    asignarTratamiento(trato) {
        this.tratamiento.push(trato);
    }

    informacion() {
        return `Numero habitacion ${this.nHabitacion}
codigo paciente ${this.codPaciente}
foto paciente ${this.foto}
tratamiento del paciente: ${this.toStringTratamiento()}`;
    }
}