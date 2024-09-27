
const menuButton = document.getElementById('menu-button');
const offScreenMenu = document.querySelector(".off-screen-menu");
const cancelButton = document.getElementById('cancel-button');

const menuLinks = document.querySelectorAll(".off-screen-menu a");

menuLinks.forEach((link) => {
    link.addEventListener("click", function() {
        offScreenMenu.classList.remove("show-menu");
        cancelButton.classList.toggle("active");
        menuButton.classList.toggle("active");
    })
})

menuButton.addEventListener("click", () => {
    offScreenMenu.classList.toggle('show-menu');
    cancelButton.classList.toggle("active");
    menuButton.classList.toggle("active");
})

cancelButton.addEventListener("click", () => {
    offScreenMenu.classList.toggle("show-menu");
    menuButton.classList.toggle("active");
    cancelButton.classList.toggle("active");
})