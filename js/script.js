const menuBurger = document.querySelector(".header__menu-burger");
const menuElements = document.querySelectorAll(
  ".header__menu-burger,.header__menu"
);


/*--------------------------burger--------------------------*/

menuBurger.addEventListener("click", () => {
  if (window.innerWidth <= 1110) {
    menuElements.forEach((element) => element.classList.toggle("active"));
  }
 
});
