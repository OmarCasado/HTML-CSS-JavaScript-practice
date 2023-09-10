const toggleMenu = document.querySelector("#toggle-menu");
const navbarLinks = document.querySelector("#top_nav");

toggleMenu.addEventListener("click", showMenu);

function showMenu () {
  navbarLinks.classList.toggle("show");
}