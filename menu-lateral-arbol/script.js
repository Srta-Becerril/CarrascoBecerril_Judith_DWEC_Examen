// Selección de elementos del DOM con la clase CSS "arrow".
const flechas = document.querySelectorAll(".arrow"); 

// Itera sobre cada elemento con la clase "arrow".
flechas.forEach((i) => {
    // Evento de click alternativo.
    i.addEventListener("click", function(){ // Función de tipo flecha.
        const subMenu = this.parentElement.nextElementSibling; // Accede al elemento padre y luego al hermano.
        subMenu.classList.toggle("show"); // Alternar la clase "show" (menú desplegable).
        this.classList.toggle("rotate"); // Alternar la clase "rotate" (flecha).
    });
});


