class Empleado {
    constructor(nombre, cedula, edad, casado, salario) {
        this.nombre = nombre;
        this.cedula = cedula;
        this.edad = edad;
        this.casado = casado;
        this.salario = salario;
    }



    clasificarCategoria(edad) {
        let clasificacion = "";
        switch (edad) {
            case edad <= 21:
                clasificacion = "principiante";
                break;
            case edad >= 22 && edad <= 35:
                clasificacion = "intermedio";
                break;
            case edad > 35:
                edad = "Senior";
                break;
            default:
                break;
        }

        return clasificacion;
    }

    textoCasado() {
        let cadena = "";
        if (this.casado) {
            cadena = "está casado";
        } else {
            cadena = "no está casado";
        }
        return cadena;
    }

    aumentarSalario(porcentaje) {
        aumento = 1 + (porcentaje / 100);
        this.salario *= aumento;
    }

    informacion() {
        return `El empleado ${this.nombre} 
es de la cedula ${this.cedula},
tiene ${this.edad} años, ${this.textoCasado()}
y su salario es ${this.salario}`;
    }
}

class Programador extends Empleado {
    constructor(nombre, cedula, edad, casado, salario, lineasDeCodigoPorDia, lenguajeDominante) {
        super(nombre, cedula, edad, casado, salario);
        this.lineasDeCodigoPorDia = lineasDeCodigoPorDia;
        this.lenguajeDominante = lenguajeDominante;
    }

    promedioMensual(mes) {
        lineasPorMes = 0;
        switch (mes) {
            case "enero" || "marzo" || "mayo" || "julio" || "agosto" || "octubre" || "diciembre":
                lineasPorMes = this.lineasDeCodigoPorDia * 31;
                break;
            case "abril" || "junio" || "septiembre" || "noviembre":
                lineasPorMes = this.lineasDeCodigoPorDia * 30;
                break;
            case "febrero":
                lineasPorMes = this.lineasDeCodigoPorDia * 28;
                break;
            default:
                break;
        }
        return lineasPorMes;
    }

}

class Analista extends Empleado {
    constructor(nombre, cedula, edad, casado, salario, arrDescripciones) {
        super(nombre, cedula, edad, casado, salario);
        this.arrDescripciones = arrDescripciones;
    }

    numProyectos() {
        return this.arrDescripciones.lengt;
    }

    cadenaDescripciones(){
        let cadena = "";
        for (let i = 0; i <  this.arrDescripciones.length; i++) {
            cadena+= this.arrDescripciones[i]+" ";
        }
        return cadena;
    }
}