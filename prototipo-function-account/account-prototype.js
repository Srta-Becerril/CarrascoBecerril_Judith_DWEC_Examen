// Declaración de función "cuentaBancaria"
function cuentaBancaria(nombre, dni, saldo = 0) { // Atributos (saldo = 0 predeterminado)
    // Inicialización de atributos.
    this.nombre = nombre;
    this.dni = dni;
    this.saldo = saldo;
    this.numeroCuenta = "ES" + Math.floor(Math.random() * 99999999999999999999).toString().padStart(20, '0'); // Atributo especial indicado en el ejercicio.

    // Método "mostrarDatos"
    this.mostrarDatos = function() {
        console.log(`Nombre: ${this.nombre}\nDNI: ${this.dni}\nNúmero de cuenta: ${this.numeroCuenta}\nSaldo: ${this.saldo}€`); // Muestra datos por consola.
    };

    // Método "realizarIngreso"
    this.realizarIngreso = function(monto) {
        if (monto > 0) { // Comprobación del monto.
            this.saldo += monto; 
            console.log(`Ingreso realizado. Nuevo saldo: ${this.saldo}€`); // Muestra dato del monto por pantalla.
        } else {
            console.log("Error: introduzca un monto positivo, por favor."); // Muestra error del monto por pantalla.
        }
    };
    
    //Método "realizarRetiro"
    this.realizarRetiro = function(monto) {
        if (monto > 0 && monto <= this.saldo) { // Comprobación del monto.
            this.saldo -= monto;
            console.log(`Retiro realizado. Nuevo saldo: ${this.saldo}€`); // Muestra dato del monto por pantalla.
        } else {
            console.log("Error: monto incorrecto/saldo insuficiente."); // Muestra error del monto por pantalla.
        }
    };

    //Método "realizarRetiro"
    this.realizarTransferencia = function(cuentaDestino, monto) {
        if (monto > 0 && monto <= this.saldo) { // Comprobación del monto.
            this.saldo -= monto;
            cuentaDestino.realizarIngreso(monto);
            console.log(`Transferencia realizada. Nuevo saldo: ${this.saldo}€`); // Muestra dato del monto por pantalla.
        } else {
            console.log("Error: monto incorrecto/saldo insuficiente para transferencia."); // Muestra error del monto por pantalla.
        }
    };
}
