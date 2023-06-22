const menuBurger = document.querySelector(".header__menu-burger");
const headerMenu = document.querySelector(".header__menu");


/*--------------------------burger--------------------------*/

menuBurger.addEventListener("click", () => {
    menuBurger.classList.toggle("active");
    headerMenu.classList.toggle("active");
});
