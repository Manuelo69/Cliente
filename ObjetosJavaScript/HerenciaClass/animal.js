class Animal {
    constructor(nombre, especie, numPatas, tieneCola) {
        this.nombre = nombre;
        this.especie = especie;
        this.numPatas = numPatas;
        this.tieneCola = tieneCola;
    }



    cadenaTieneCola() {
        let cadena = "";
        if (this.tieneCola) {
            cadena = "tiene cola";
        } else {
            cadena = "no tiene cola";
        }
        return cadena;
    }

    informacion() {
        return `El animal ${this.nombre} es de la especie ${this.especie} y tiene ${this.numPatas} y ${this.cadenaTieneCola()}`;
    }
}

class Vaca extends Animal {
    constructor(nombre, especie, numPatas, tieneCola, litrosleche) {
        super(nombre, especie, numPatas, tieneCola);
        this.litrosleche = litrosleche;
    }

    ordeñar() {
        if (this.litrosleche != 0) {
            this.litrosleche--;
        }
    }
}

class Tigre extends Animal {
    constructor(nombre, especie, numPatas, tieneCola, numVictimas) {
        super(nombre, especie, numPatas, tieneCola);
        this.numVictimas = numVictimas;
    }
    otraVictima() {
        this.numVictimas++;
    }
}