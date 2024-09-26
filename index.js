
const menuButton = document.getElementById('menu-button');
const offScreenMenu = document.querySelector(".off-screen-menu");
const cancelButton = document.getElementById('cancel-button');

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