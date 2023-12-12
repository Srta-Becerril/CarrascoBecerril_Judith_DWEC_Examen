// Pedir datos por pantalla (nombre, apellidos, edad y ciclo).
nombre = prompt("Introduzca su nombre: ");
apellidos = prompt("Introduzca sus apellidos: ");
edad = parseInt(prompt("Introduzca su edad: "));
ciclo = prompt("Introduzca su ciclo formativo: ", "DAW");

// Imprimir datos por pantalla emergente. Se usa "\n" para salto de línea.
alert(`Nombre: ${nombre}\nApellido: ${apellidos}\nEdad: ${edad}\nCiclo: ${ciclo}`);
