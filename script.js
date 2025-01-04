// Selección de elementos
const themeToggle = document.querySelector('.theme-toggle');
const sunIcon = document.getElementById('sun-icon');
const moonIcon = document.getElementById('moon-icon');
const root = document.documentElement;

// Verifica el modo inicial
if (localStorage.getItem('theme') === 'dark') {
    root.classList.add('dark-mode');
    sunIcon.style.display = 'inline-block';
    moonIcon.style.display = 'none';
}

// Alterna el modo y actualiza íconos
themeToggle.addEventListener('click', () => {
    if (root.classList.contains('dark-mode')) {
        root.classList.remove('dark-mode');
        localStorage.setItem('theme', 'light');
        sunIcon.style.display = 'none';
        moonIcon.style.display = 'inline-block';
    } else {
        root.classList.add('dark-mode');
        localStorage.setItem('theme', 'dark');
        sunIcon.style.display = 'inline-block';
        moonIcon.style.display = 'none';
    }
});

    // Menú hamburguesa
document.addEventListener("DOMContentLoaded", () => {
    const hamburger = document.getElementById("hamburger");
    const navLinks = document.querySelector(".nav-links");

    // Toggle para mostrar u ocultar el menú
    hamburger.addEventListener("click", () => {
        navLinks.classList.toggle("show");
    });
});




