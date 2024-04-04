class Persona {
    constructor(nombre, edad, dni, sexo, peso, altura) {
        this.nombre = nombre;
        this.edad = edad;
        this.dni = dni;
        this.sexo = sexo;
        this.peso = peso;
        this.altura = altura;
    }

    informacion() {
        return `la persona ${this.nombre} 
con dni ${this.dni}        
tiene ${this.edad} años,
es del genero ${this.sexo},
pesa ${this.peso} kilos 
y mide ${this.altura}`;
    }

    calcularIMC() {
        let imc = 0;
        let salud = 0;
        imc = this.peso / (Math.pow(this.altura / 100, 2))
        if (imc < 20) {
            salud = -1;
        } else if (imc > 25) {
            salud = 1;
        }
        return salud;
    }

    mensajeIMC(salud) {
        let mensaje = this.persona + " tiene imc en el peso ideal";
        if (salud = -1) {
            mensaje = this.persona + " tiene imc por debajo del peso ideal";
        } else if (salud = 1) {
            mensaje = this.persona + " tiene imc por encima del peso ideal";
        }
    }

    esMayorDeEdad() {
        mayor = false;
        if (this.edad > 18) {
            mayor = true;
        }
        return mayor;
    }

    mensajeEdad(mayor) {
        let mensaje = this.persona + " es menor de edad";
        if (mayor) {
            mensaje = this.persona + " es mayor de edad";
        }
        return mensaje;
    }

    generaDNI() {
        this.dni = Math.floor(Math.random() * 9999999 + 10000000);
    }

}