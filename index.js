
const menuButton = document.getElementById('menu-button');
const offScreenMenu = document.querySelector(".off-screen-menu");

menuButton.addEventListener("click", () => {
    // hamMenu.classList.toggle('active');
    offScreenMenu.classList.toggle('show-menu');
})