// Declaración de la clase "Aula".
class Aula {
    // Constructor.
    constructor(numero, capacidad) {
        // Inicialización de atributos.
        this.numero = numero;
        this.capacidad = capacidad;
    }
    presentarMateriales() {
        console.log(`Bienvenidos al aula ${this.numero}, la cual tiene capacidad para ${this.capacidad} personas.`); // Imprime datos por consola.
    }
}

// Declaración de la clase "Musica".
class Musica extends Aula {
    // Constructor.
    constructor(numero, capacidad, instrumento) {
        // Inicialización de atributos.
        super(numero, capacidad);
        this.instrumento = instrumento;
    }
    presentarMateriales() {
        console.log(`Bienvenidos al aula de música número ${this.numero}. Hoy presentaremos los materiales necesarios para la clase de ${this.instrumento}, 
        solamente tenemos ${this.capacidad} plazas.`); // Imprime datos por consola.
    }
}

// Declaración de la clase "Tecnologia".
class Tecnologia extends Aula {
    // Constructor.
    constructor(numero, capacidad, cantidadOrdenadores) {
        // Inicialización de atributos.
        super(numero, capacidad);
        this.cantidadOrdenadores = cantidadOrdenadores;
    }
    presentarMateriales() {
        console.log(`Bienvenidos al aula de tecnología número ${this.numero}. El día de hoy hemos comprado ${this.cantidadOrdenadores} ordenadores adicionales 
        para aprender a programar, en total ahora tenemos ${this.capacidad} estudiantes de capacidad`); // Imprime datos por consola.
    }
}

// Objetos.
let musica1 = new Musica(1, 20, "Piano");
let tecno1 = new Tecnologia(2, 15, 20);

// Imprimir objetos.
musica1.presentarMateriales();
tecno1.presentarMateriales();

// Pregunta resuelta.
console.log("¿Cómo se llama la característica de la POO que permite sobrescribir los métodos en herencia?\nPolimorfismo.")