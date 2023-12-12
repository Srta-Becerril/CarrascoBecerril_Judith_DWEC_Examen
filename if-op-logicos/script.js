// Declaración de función "saludarSegunHora".
function saludarSegunHora() {
    let fechaActual = new Date(); // Declara variable para comprobar la fecha actual.
    let horaActual= fechaActual.getHours(); // Declara variable para comprobar la hora actual de la fecha.

    // Condicional que comprueba la hora actual e imprime mensaje según corresponda.
    if (horaActual >= 5 && horaActual < 12) { 
        alert("¡Buenos días!");
    } else if (horaActual >= 12 && horaActual < 18) {
        alert("¡Buenas tardes!");
    } else {
        alert("¡Buenas noches!");
    }
}

// Llama a la función.
saludarSegunHora(); 