// Selección de elementos del DOM con la clase CSS "hamburger" y "nav-links" declarándose en constantes.
const hamburguesa = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");

// Evento de click alternativo.
hamburguesa.addEventListener("click", () => { // Función de tipo flecha.
    navLinks.classList.toggle("active"); // Alternar la clase "active".
});

/*
// Función modificada: 
function toggleNav() { 
  navLinks.classList.toggle('active');
}

hamburger.addEventListener('click', toggleNav);
*/
