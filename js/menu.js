const menuToggle = document.getElementById("menu-toggle");
const navBar = document.querySelector(".nav-bar");
const iconoMenu = document.getElementById("icono-menu");

menuToggle.addEventListener("click", () => {
    navBar.classList.toggle("active");

    if (navBar.classList.contains("active")) {
        iconoMenu.src = iconoMenu.src.replace("open.png", "close.png");
    } else {
        iconoMenu.src = iconoMenu.src.replace("close.png", "open.png");
    }
});