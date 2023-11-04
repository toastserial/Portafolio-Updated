const nav = document.querySelector('nav');

// Escucha el evento de desplazamiento (scroll) en la ventana
window.addEventListener('scroll', () => {
    // Verifica la posición del scroll
    if (window.scrollY > 0) {
        // Agrega una clase al nav cuando se desplaza hacia abajo
        nav.classList.add('nav-scroll');
    } else {
        // Elimina la clase cuando se encuentra en la parte superior
        nav.classList.remove('nav-scroll');
    }
});

document.addEventListener("DOMContentLoaded", function () {
    const menuToggle = document.querySelector(".menu-toggle");
    const menu = document.querySelector(".menu");

    menuToggle.addEventListener("click", function () {
        menu.classList.toggle("active");
    });
});