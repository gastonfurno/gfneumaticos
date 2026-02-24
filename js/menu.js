document.addEventListener("DOMContentLoaded", function () {

    const menuToggle = document.getElementById("menu-toggle");
    const navBar = document.querySelector(".nav-bar");
    const iconoMenu = document.getElementById("icono-menu");

    menuToggle.addEventListener("click", function () {
        navBar.classList.toggle("active");

        if (navBar.classList.contains("active")) {
            iconoMenu.src = "imagenes/close.png";
        } else {
            iconoMenu.src = "imagenes/open.png";
        }
    });

});