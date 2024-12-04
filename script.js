// Obtiene todas las secciones de la invitación
const sections = document.querySelectorAll('.invitation section');

// Índice para rastrear la sección actual
let currentSection = 0;

// Función para desplazarse a la siguiente sección
function scrollToNextSection() {
  currentSection = (currentSection + 1) % sections.length; // Ciclo infinito
  sections[currentSection].scrollIntoView({ behavior: 'smooth' });
}

// Ejecutar la función cada 5 segundos
setInterval(scrollToNextSection, 5000);
