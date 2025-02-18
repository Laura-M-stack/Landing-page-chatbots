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
// Selecciona los elementos necesarios
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');
const navLinksItems = document.querySelectorAll('.nav-links a');

// Alterna la clase 'show' para desplegar el menú
hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('show');
});

// Cierra el menú al hacer clic en cualquier enlace
navLinksItems.forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('show');
    });
});

document.addEventListener("DOMContentLoaded", function() {
    ScrollReveal().reveal('.hero-text', {
        origin: 'left',
        distance: '50px',
        duration: 1000,
        delay: 200,
        easing: 'ease-in-out',
        reset: true
    });
    
    ScrollReveal().reveal('.hero-image', {
        origin: 'right',
        distance: '50px',
        duration: 1000,
        delay: 400,
        easing: 'ease-in-out',
        reset: true
    });

    ScrollReveal().reveal('.card', {
        origin: 'bottom',
        distance: '50px',
        duration: 1000,
        delay: 200,
        easing: 'ease-in-out',
        interval: 200,
        reset: true
    });

    ScrollReveal().reveal('.texto', {
        origin: 'left',
        distance: '50px',
        duration: 1000,
        delay: 300,
        easing: 'ease-in-out',
        reset: true
    });
    
    ScrollReveal().reveal('.imagen', {
        origin: 'right',
        distance: '50px',
        duration: 1000,
        delay: 300,
        easing: 'ease-in-out',
        reset: true
    });
    
    ScrollReveal().reveal('.plan-card', {
        origin: 'bottom',
        distance: '50px',
        duration: 1000,
        delay: 200,
        interval: 200,
        easing: 'ease-in-out',
        reset: true
    });
    
    ScrollReveal().reveal('.testimonios .card', {
        origin: 'bottom',
        distance: '50px',
        duration: 1000,
        delay: 200,
        interval: 200,
        easing: 'ease-in-out',
        reset: true
    });

    ScrollReveal().reveal('.cta h2, .cta p', {
        origin: 'top',
        distance: '50px',
        duration: 1000,
        delay: 200,
        interval: 200,
        easing: 'ease-in-out',
        reset: true
    });

    ScrollReveal().reveal('.contacto form', {
        origin: 'bottom',
        distance: '50px',
        duration: 1000,
        delay: 200,
        easing: 'ease-in-out',
        reset: true
    });

    ScrollReveal().reveal('.footer-section', {
        origin: 'bottom',
        distance: '30px',
        duration: 1000,
        delay: 200,
        interval: 200,
        easing: 'ease-in-out',
        reset: true
    });
});







