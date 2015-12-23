var menu = document.querySelector(".menu__list");
var openButton = document.querySelector(".menu-container__button-menu--open");
var closeButton = document.querySelector(".menu__button-menu--close");

openButton.addEventListener("click", function(event) {
    event.preventDefault();
    menu.classList.remove("menu--close")
    menu.classList.add("menu--show");
});

closeButton.addEventListener("click", function(event) {
    event.preventDefault();
    menu.classList.add("menu--close");
    menu.classList.remove("menu--show");
});
