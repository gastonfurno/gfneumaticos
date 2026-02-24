menuToggle.addEventListener("click", () => {
    navBar.classList.toggle("active");

    if (navBar.classList.contains("active")) {
        iconoMenu.src = iconoMenu.src.replace("open.png", "close.png");
    } else {
        iconoMenu.src = iconoMenu.src.replace("close.png", "open.png");
    }
});