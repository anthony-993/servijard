document.addEventListener("DOMContentLoaded", function () {
    const menuToggle = document.querySelector(".menu-toggle");
    const menu = document.querySelector(".menu");

    menuToggle.addEventListener("click", function () {
        menu.classList.toggle("menu-active"); // Abre o cierra el menú
    });

    // Cerrar menú cuando se haga clic en un enlace
    document.querySelectorAll(".menu a").forEach(link => {
        link.addEventListener("click", function () {
            menu.classList.remove("menu-active");
        });
    });
});

document.addEventListener("DOMContentLoaded", function () {
    new Swiper(".swiper-container", {
        loop: true, // Hace que el carrusel sea infinito
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
        autoplay: {
            delay: 3000, // Cambia la imagen cada 3 segundos
            disableOnInteraction: false,
        },
    });
});

