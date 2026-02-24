document.addEventListener("DOMContentLoaded", function () {

    const menuToggle = document.getElementById("menu-toggle");
    const navBar = document.querySelector(".nav-bar");
    const iconoMenu = document.getElementById("icono-menu");

    if (!menuToggle || !navBar || !iconoMenu) {
        console.log("Algún elemento no se encontró en esta página");
        return;
    }

    menuToggle.addEventListener("click", function () {
        navBar.classList.toggle("active");

        if (navBar.classList.contains("active")) {
            iconoMenu.src = iconoMenu.src.replace("open.png", "close.png");
        } else {
            iconoMenu.src = iconoMenu.src.replace("close.png", "open.png");
        }
    });

});